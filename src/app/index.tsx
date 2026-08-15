import type { Course } from "@/types/course";
import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {


  const [count, setCount] = useState(0)
  const [courses, setCourses] = useState<Course[]>([])
  const [keyword, setKeyword] = useState('')
  const [loading, setLaoding] = useState(true)


  const fetchData = async () => {
    if (courses.length > 0) {
      setCourses([]);
      return
    } else {
      try {
        const res = await fetch(`http://v1.kisbook.com:3000/search?q=${keyword}`)
        const { data } = await res.json()
        setCourses(data.courses)
      } catch (error) {
        console.error("Error fetching courses:", error)
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [keyword]);
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
      <ScrollView>
        {
          courses.map((course) => (
            <View key={course.id}>
              <Text>{course.name}</Text>
            </View>
          ))
        }
      </ScrollView>
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
