import type { Course } from "@/types/course";
import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    if (courses.length > 0) {
      setCourses([]);
      return;
    } else {
      try {
        const res = await fetch("http://v1.kisbook.com:3000/search");
        const { data } = await res.json();
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Fetch Courses" onPress={fetchCourses} />

      <ScrollView>
        {
          courses.map((course) => (
            <View key={course.id}>
              <Image source={{uri: course.user.avatar}} style={styles.avatar} />
              <Text>{course.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  }
});
