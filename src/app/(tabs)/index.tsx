import {
  ScrollView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { Image } from 'expo-image'
import { Link, useRouter } from 'expo-router'
import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'
import { useState } from 'react'


export default function Index() {


  // const [keyword, setKeyword] = useState()
  // const { data, loading, error, onReload } = useFetchData('/search', { q: keyword })
  // const router = useRouter()
  const url = '/'
  const { data, loading, error, onReload } = useFetchData(url)
  const { recommendedCourses, likesCourses, introductoryCourses } = data
  console.log(data)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }

  return (

    <ScrollView style={styles.container}>


      <Text style={styles.title}>Home Page</Text>

      <Link style={styles.link} href="/courses/1?title=Node.js">
        Check Node.js Course
      </Link>

      <Link style={styles.link} href="/teachers/1">
        Modal
      </Link>
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

  buttonText: {
    marginTop: 20,
    fontSize: 25,
    color: '#ff7f6f',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e29447',
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    color: '#1f99b0',
  },
})

