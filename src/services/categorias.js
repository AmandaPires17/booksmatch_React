import api from '../plugins/api'

class CategoriaService {
  async getAllCategorias() {
    const response = await api.get('/categorias/')
    return response.data
  }
  async saveCategoria(livro) {
    const response = await api.post('/livros/', livro)
    return response.data
  }
  async deleteLivro(livro) {
    const response = await api.delete(`/livros/${livro.id}/`)
    return response.data
  }
}

export default new LivroService()