import api from '../plugins/api'

class LivroService {
  async getAllLivros() {
    const response = await api.get('/livros/')
    return response.data
  }
  async saveLivro(livro) {
    const response = await api.post('/livros/', livro)
    return response.data
  }
  async deleteLivro(livro) {
    const response = await api.delete(`/livros/${livro.id}/`)
    return response.data
  }
}

export default new LivroService()