const bar = {
  home: 'Casa',
  contacts: 'Contatos',
  member: 'Membros',
  weare: 'Sobre',
  photos: 'Fotos',
  rank: 'Graduações'
}

function Bar() {
  for (let li of Navbar.children) {
    const nav = li.getAttribute('class')
    li.children[0].li = bar[nav]
    return li.children[0].li
  }
}
