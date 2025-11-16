import { useGetNicknameList } from '@/queries/users.query'

const useNickNameData = () => {
  const {data : nickname} = useGetNicknameList()

  const nicknameList = nickname?.data?.nicknameOptions

  return{
    nicknameList
  }

}

export default useNickNameData