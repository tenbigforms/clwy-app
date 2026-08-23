import {
  ScrollView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ListRenderItemInfo,
} from 'react-native'
import { Image } from 'expo-image'
import { Link, useRouter } from 'expo-router'
import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'
import { JSXElementConstructor, ReactElement, useState } from 'react'


export default function Index() {


  // const [keyword, setKeyword] = useState()
  // const { data, loading, error, onReload } = useFetchData('/search', { q: keyword })
  // const router = useRouter()
  const url = '/'
  const { data, loading, error, onReload } = useFetchData(url)
  const { recommendedCourses, likesCourses, introductoryCourses } = data
  // console.log(data)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }

  const renderItem = ({ item, index }) => (
    <Link asChild href={{ pathname: '/courses/[id]', params: { id: item.id } }}>
      <TouchableWithoutFeedback>
        <View
          style={[
            styles.course,
            index === 0 ? styles.first : null,
            index === recommendedCourses.length - 1 ? styles.last : null,
          ]}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.category}>{item.category.name}</Text>
            <View style={styles.userWrapper}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.nickname}>{item.user.nickname}</Text>
                <Text style={styles.company} numberOfLines={2}>
                  {item.user.company}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Link>
  )
  return (

    <ScrollView style={styles.container}>
      <View style={styles.slides}>
        <FlatList
          data={recommendedCourses}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slides: {
    marginTop: 10,
    marginBottom: 16,
  },
  course: {
    marginRight: 8,
  },
  image: {
    width: 320,
    height: 145,
    borderRadius: 10,
  },
  content: {
    paddingLeft: 10,
  },
  name: {
    width: 305,
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 13,
  },
  category: {
    marginTop: 6,
    fontSize: 8,
  },
  userWrapper: {
    marginTop: 15,
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 10,
  },
  nickname: {
    fontSize: 11,
  },
  company: {
    width: 100,
    marginTop: 2,
    fontSize: 10,
    color: '#777',
  },
  first: {
    marginLeft: 10,
  },
  last: {
    marginRight: 10,
  },
})

