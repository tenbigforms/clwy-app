import Loading from "@/components/shared/loading/loading";
import NetworkError from "@/components/shared/networkerror/networkerror";
import type { Course } from "@/types/course";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {


  const [count, setCount] = useState(0)
  const [courses, setCourses] = useState<Course[]>([])
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    if (courses.length > 0) {
      setCourses([]);
      return
    } else {
      try {

        const res = await fetch(`http://v1.kisbook.com:3000/search?q=${keyword}`)
        const { data } = await res.json()
        setCourses(data.courses)
      } catch (err) {
        setError(true)
      }
      finally {
        setLoading(false)
      }
    }
  };

  const onReload = async () => {
    setLoading(true);
    setError(false);
    await fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [keyword]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }
  return (
    <View style={styles.container}>
      <Text>{count}times</Text>
      <Button
        title="Click me"
        onPress={() => setCount(count + 1)}
      />
      <Text>U R SEARHING FOR:{keyword}</Text>
      <TextInput
        style={styles.input}
        placeholder="Please type STH"
        onChangeText={text => setKeyword(text)}
        defaultValue={keyword}
      />
      <View>
        {
          courses.map((course) => (
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
