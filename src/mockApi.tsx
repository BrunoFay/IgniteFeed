export const api = [{
  id: '1',
  author: {
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    name: 'Amanda Babanovic',
    role: 'Ux Developer'
  },
  content: [
    {
      type: 'paragraph',
      content: 'Fala galeraa 👋'
    },
    {
      type: 'paragraph',
      content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
    },
    {
      type: 'link',
      content: 'jane.design/doctorcare'
    },
    {
      type: 'hashtag',
      content: [
        '#novoprojeto',
        '#nlw',
        '#rocketseat'
      ]
    }
  ],
  publishedAt: new Date('2022-07-09 20:07:05')
},
{
  id: '2',
  author: {
    avatarUrl: "https://images.unsplash.com/photo-1583196974626-9402e3774505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: 'James Curry',
    role: 'Back-end Developer'
  },
  content: [
    {
      type: 'paragraph',
      content: 'Alguma indicação sobre qual linguagem de Back-end estudar em 2022?.'
    },
    {
      type: 'hashtag',
      content: [
        '#golang',
        '#elixir',
        '#rust'
      ]
    }
  ],
  publishedAt: new Date('2022-07-05 20:07:05')
}]
