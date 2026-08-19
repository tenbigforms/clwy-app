import Loading from "@/components/shared/loading/loading";
import NetworkError from "@/components/shared/networkerror/networkerror";
import useFetchData from "@/hooks/useFetchData";
import { Course } from "@/types/course";
import { useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

interface ApiResponse {
  courses: Course[]
}

export default function Index() {

  const [keyword, setKeyword] = useState('')

  const { data, loading, error, onReload } = useFetchData('/search', { q: keyword });
  const { courses } = (data as ApiResponse);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    console.log('start fetching');
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'#1f99b0'} />
      }>
      <View>
        <Text style={styles.content}>
          君不見，黃河之水天上來，奔流到海不復回！
          君不見，高堂明鏡悲白髮，朝如青絲暮成雪！
          人生得意須盡歡，莫使金樽空對月。
          天生我材必有用，千金散盡還復來。
          烹羊宰牛且爲樂，會須一飲三百杯。
          岑夫子，丹丘生。（將）進酒君莫停。
          與君歌一曲，請君爲我傾耳聽。
          鐘鼓饌玉不足貴，但願長醉不復醒。
          古來聖賢皆寂寞，惟有飲者留其名。
          陳王昔時宴平樂，斗酒十千恣歡謔。
          主人何為言少錢？徑須沽取對君酌。
          五花馬，千金裘。
          呼兒將出換美酒，與爾同銷萬古愁。


        </Text>
      </View>
      <View style={styles.container}>
        <Text>U R SEARHING FOR:{keyword}</Text>
        <TextInput
          style={styles.input}
          placeholder="Please type STH"
          onChangeText={text => setKeyword(text)}
          defaultValue={keyword}
        />
        <View>
          {
            courses.map((course: Course) => (
              <View key={course.id}>
                <Text>{course.name}</Text>
              </View>
            ))
          }
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    color: '#111192',
  },
  content: {
    fontSize: 60
  },
});
