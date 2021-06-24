import Avaliador from '@/views/Avaliador'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { getLeiloes} from '@/http'
import flushPromisses from 'flush-promises'

jest.mock('@/http')

const leiloes = [
  {
    "produto": "Ebook",
    "descricao": "Um livro com um conteúdo muito interessante sobre VueJS",
    "lanceInicial": "50",
  },
  {
    "produto": "Ebook",
    "descricao": "Um livro com um conteúdo muito interessante sobre testes",
    "lanceInicial": "50",
  },
]

describe('Um avaliador que se conecta com a API', () => {
  test('mostra todos os leiloes retornados pela API', async () => {
    getLeiloes.mockResolvedValueOnce(leiloes)

    const wrapper = mount(Avaliador, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    await flushPromisses()
    const totalLeiloesExibidos = wrapper.findAll('.leilao').length
    expect(totalLeiloesExibidos).toBe(leiloes.length)
  })
  test('não há leiloes retornados pela API', async () => {
    getLeiloes.mockResolvedValueOnce(leiloes)

    const wrapper = mount(Avaliador, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    await flushPromisses()
    const totalLeiloesExibidos = wrapper.findAll('.leilao').length
    expect(totalLeiloesExibidos).toBe(0)
  })
})