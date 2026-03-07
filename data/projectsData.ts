interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '카카오스캔',
    description: `번호 저장없이 상대방의 카카오톡 기본 프로필을 확인할 수 있는 서비스입니다.`,
    imgSrc: '/static/images/kakaoscan-thumbnail.jpg',
    href: '/blog/deep-dive-kakaoscan',
  },
]

export default projectsData
