import Loading from "@/components/shared/loading/loading";
import NetworkError from "@/components/shared/networkerror/networkerror";
import useFetchData from "@/hooks/useFetchData";
import { Course } from "@/types/course";
import { useState } from "react";
import { FlatList, ListRenderItem, RefreshControl, StyleSheet, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

interface ApiResponse {
  courses: Course[]
}

interface ItemData {
  id: number;
  title: string;
}

export default function Index() {

  const [keyword, setKeyword] = useState('')

  const { data, loading, error, onReload } = useFetchData('/search', { q: keyword });
  const courses = (data as ApiResponse)?.courses || [];
  const [refreshing, setRefreshing] = useState(false);
  const poetry = [
    { "id": 1, "title": "静夜思" },
    { "id": 2, "title": "望庐山瀑布" },
    { "id": 3, "title": "早发白帝城" },
    { "id": 4, "title": "黄鹤楼送孟浩然之广陵" },
    { "id": 5, "title": "将进酒" },
    { "id": 6, "title": "行路难·其一" },
    { "id": 7, "title": "蜀道难" },
    { "id": 8, "title": "月下独酌·其一" },
    { "id": 9, "title": "赠汪伦" },
    { "id": 10, "title": "梦游天姥吟留别" },
    { "id": 11, "title": "宣州谢朓楼饯别校书叔云" },
    { "id": 12, "title": "送友人" },
    { "id": 13, "title": "登金陵凤凰台" },
    { "id": 14, "title": "清平调·其一" },
    { "id": 15, "title": "秋浦歌·白发三千丈" },
    { "id": 16, "title": "渡荆门送别" },
    { "id": 17, "title": "夜宿山寺" },
    { "id": 18, "title": "独坐敬亭山" },
    { "id": 19, "title": "关山月" },
    { "id": 20, "title": "子夜吴歌·秋歌" },
    { "id": 21, "title": "下终南山过斛斯山人宿置酒" },
    { "id": 22, "title": "月下独酌·其二" },
    { "id": 23, "title": "塞下曲六首·其一" },
    { "id": 24, "title": "玉阶怨" },
    { "id": 25, "title": "春夜洛城闻笛" },
    { "id": 26, "title": "越中览古" },
    { "id": 27, "title": "山中问答" },
    { "id": 28, "title": "清平调·其一" },
    { "id": 29, "title": "清平调·其二" },
    { "id": 30, "title": "清平调·其三" }
  ]

  const onRefresh = () => {
    setRefreshing(true);

    console.log('start fetching');
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
const renderItem: ListRenderItem<ItemData> = ({ item }) => {
    return (
      <Text style={styles.title}>
        {item.id}. {item.title}
      </Text>
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }
  return (
    <View style={styles.container}>
            {/* <View style={styles.container}>
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
      </View> */}
      <FlatList
        data={poetry}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={styles.header}>《李白》</Text>}
        ListFooterComponent={<Text style={styles.footer}>No more...</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'#1f99b0'} />
        }
      />
    </View>
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
  title: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 40,
  },
  header: {
    textAlign: "center",
    fontSize: 40,
    lineHeight: 60,
    fontWeight: "bold",
    marginVertical: 10,
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 40,
    color: "#999",
  },
});

