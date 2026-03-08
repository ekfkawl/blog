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
  {
    title: 'Hosthook-pay',
    description: `Phone Link 호스트 프로세스를 후킹하여 휴대폰 입출금 알림을 가로채고, 무통장·계좌이체 입금을 자동으로 확인 가능하도록 도와주는 라이브러리입니다.`,
    imgSrc: '/static/images/hosthook-pay-thumbnail.jpg',
    href: '/blog/deep-dive-hosthook-pay',
  },
]

export default projectsData
