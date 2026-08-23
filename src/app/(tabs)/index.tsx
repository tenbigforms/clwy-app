import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import Slides from '@/components/(tabs)/index/Slides'
import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'
import CoursesList from '@/components/(tabs)/index/CoursesList'

export default function Index() {


  const url = '/'
  const { data, loading, error, onReload } = useFetchData(url)
  const { recommendedCourses, likesCourses, introductoryCourses } = data
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }


  return (

    <ScrollView style={styles.container}>
      <Slides courses={recommendedCourses} />
      <CoursesList courses={likesCourses} title="Popular Courses" />
      <CoursesList courses={introductoryCourses} title="Baisic Courses" />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

