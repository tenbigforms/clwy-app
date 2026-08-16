import Loading from "@/components/shared/loading/loading";
import NetworkError from "@/components/shared/networkerror/networkerror";
import useFetchData from "@/hooks/useFetchData";
import { Course } from "@/types/course";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface ApiResponse {
  courses: Course[]
}

export default function Index() {

  const [keyword, setKeyword] = useState('')

  const { data, loading, error, onReload } = useFetchData('/search', { q: keyword });
  const { courses } = (data as ApiResponse);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }
  return (
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
});
