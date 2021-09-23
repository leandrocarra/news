import React from 'react';
import LayoutDefault from '../__layoutDefaut';
import Header from '../../Components/Header';
import salarios from './salarios.jpg';
import processoSeletivo from './processoSeletivo.jpg';
import avaliacao from './avaliacao.jpg';
import filiais from './filiais.jpg';
import map from './map.jpg';
import atributos from './atributos.jpg';
import pagination from './pagination.jpg';
import orderby from './orderby.jpg';
import perfil from './perfil.jpg';
import health from './health.jpg';

const Sexta2309 = () => {
  return (
    <>
      <Header />
      <LayoutDefault date='23/09/2021'>
        <h2 className='title'>Processo Seletivo</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Agora em processo seletivo, mostramos candidatos que atraves do facebook jobs se candidatam a uma vaga.
          </p>
        </div>
        <div className='contentImage'>
          <img src={processoSeletivo} alt='processoSeletivo' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao processo seletivo na pagina da empresa. 
            <a href='https://app.worc.com.br/processo-seletivo'>https://app.worc.com.br/processo-seletivo/</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Busca Ativa</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Agora os candidatos aparecem seguindo uma ordenação e não mais por quem se cadastrou primeiro. <br /><br />
            A ordenação é:<br />
            1 - Pontos de provas<br />
            2 - Ultima vez que se logou<br />
            3 - Ultima vez que modificou o perfil
          </p>
        </div>
        <div className='contentImage'>
          <img src={orderby} alt='orderby' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao busca ativa na pagina da empresa. 
            <a href='https://app.worc.com.br/busca'>https://app.worc.com.br/busca</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Home de Candidato</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Agora o candidato tem como saber o quanto falta para ele ter um perfil campẽao, mostramos a ele, uma barra de Health Score(nome temporario)
          </p>
        </div>
        <div className='contentImage'>
          <img src={health} alt='health' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na home do candidato. 
            <a href='https://app.worc.com.br/inicio'>https://app.worc.com.br/inicio</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Busca Ativa</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Temos agora dentro do mapa, a opção clicar no pin azul e ver o perfil do candidato, sendo possivel até, chama-lo para entrevista. 
          </p>
        </div>
        <div className='contentImage'>
          <img src={perfil} alt='perfil' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao busca ativa na pagina da empresa. 
            <a href='https://app.worc.com.br/busca'>https://app.worc.com.br/busca</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Vagas</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Separamos a quantidade de vagas que podem ser vistas em 5 e colocamos paginação, ganhando performance e usabilidade.
          </p>
        </div>
        <div className='contentImage'>
          <img src={pagination} alt='pagination' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao vagas na pagina da empresa. 
            <a href='https://app.worc.com.br/vagas?page_size=5&page=1'>https://app.worc.com.br/vagas/</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Criar Vagas</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Agora em quando criamos uma vaga podemos descrever o que compõem o salario
          </p>
        </div>
        <div className='contentImage'>
          <img src={salarios} alt='salarios' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao criar vaga na pagina da empresa. 
            <a href='https://app.worc.com.br/vagas?page_size=5&page=1'>https://app.worc.com.br/vagas/</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Criar Vagas</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Agora quando criamos uma vaga podemos ou não compartilhar vaga automaticamente com a nossa base de conhecimento externa?
          </p>
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao criar vaga na pagina da empresa. 
            <a href='https://app.worc.com.br/vagas?page_size=5&page=1'>https://app.worc.com.br/vagas/</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Criar Vagas</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Agora quando criamos uma vaga podemos escolher por nivel de avaliação do candidato
          </p>
        </div>
        <div className='contentImage'>
          <img src={avaliacao} alt='avaliacao' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao criar vaga na pagina da empresa. 
            <a href='https://app.worc.com.br/vagas?page_size=5&page=1'>https://app.worc.com.br/vagas/</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Busca Ativa</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Adicionamos busca por filiais
          </p>
        </div>
        <div className='contentImage'>
          <img src={filiais} alt='filiais' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao busca ativa na pagina da empresa. 
            <a href='https://app.worc.com.br/busca'>https://app.worc.com.br/busca</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Busca Ativa</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Adicionamos um pin vermelhor representando filial no mapa
          </p>
        </div>
        <div className='contentImage'>
          <img src={map} alt='map' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao busca ativa na pagina da empresa. 
            <a href='https://app.worc.com.br/busca'>https://app.worc.com.br/busca</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Busca Ativa</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Adicionamos busca por atributos tecnicos
          </p>
        </div>
        <div className='contentImage'>
          <img src={atributos} alt='atributos' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opcao busca ativa na pagina da empresa. 
            <a href='https://app.worc.com.br/busca'>https://app.worc.com.br/busca</a>
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'> Como ficamos um tempo sem atualizar o maître, na parte de bugs, vamos colocar uma lista com o titulo do bug. <br/>  <br/>
        Nas proximas versões voltaremos com os detalhes do que causou o bug e como foi corrigido em detalhes.</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <ul className='bigList'>
            <li>Em chamar para entrevista, quando a ultima data de entrevista, ja estiver vencida, mostrar alerta no modal que a data expirou</li>
            <li>Login do candidato expirar após 7 dias</li>
            <li>Ajustes na redefinição de senha</li>
            <li>Problemas ao adicionar curriculo</li>
            <li>Header quebrando quando o email possui muitos caracteres</li>
            <li>Campo senha n dixando cadastrar maiusculas</li>
            <li>Endereços errados aparecendo no perfil</li>
            <li>Criar script para atualizar o last_login dos candidates</li>
            <li>Na tela de login, mostrar erro quando for email ou senha incorretos no status 401</li>
            <li>Em busca de candidato, ao filtrar por idade, a tela pisca feito doido</li>
            <li>No celular na tela de login, fica tudo embaralhado pq as telas sobem por causa do teclado</li>
            <li>Em equipe na nuvem só mostrar nos favoritos e sugeridos pela worc quem não for employee</li>
            <li>Empresa nao consegue chamar para entrevita, fluxo n funciona "supostamente"</li>
            <li>Problema com candidatos da GRP</li>
            <li>ZDeli aparecendo pra todo mundo</li>
            <li>Ajuste na criação de horário de entrevista para refletir na vaga</li>
            <li>O 'ver distância' deve reagir a unidade selecionada</li>
            <li>Bug da migrations com email people e company</li>
            <li>Modal de feedback para entrevista parece nao estar funcionando após 1h</li>
            <li>Provas do Z-Deli aparecendo como filtro para outras posições, inclusive no "buscar candidatos"</li>
            <li>Na tela de curso, n mostra cores dos niveis</li>
            <li>Cursos da zDeli comportamento muito loko</li>
            <li>filtro de cidade está, estranho</li>
            <li>Em modal de detalhes do candidato, trocar a frase perfil psicologico, perfil comportamental</li>
            <li>No modal de detalhes do candidato, subir o campo curriculo, pra ficar acima Habilidades</li>
            <li>No modal de chamar para entrevista, o campo horario de descanso, está como horario de trabalho</li>
            <li>Em criar vaga, no campo, horario de descanso, trocar o nome para horario de refeicao, e retirar o obrigatorio</li>
            <li>Na tela de cadastro de uma nova vaga no mobile o botão voltar está ficando em cima do "Escolha o tipo da vaga"</li>
            <li>Erro de layout no footer da tela de entrevistas do candidato no mobile</li>
            <li>Em modulos de provas ( estrelinhas ) em criar vaga, esta vindo curso da Z DELI, retirar isso dos modulos</li>
            <li>Em busca de candidato o campo cidade já esta vindo preenchida com muitas cidades, puxada das filiais, e o campo ver distancia se perde</li>
            <li>Na tela de edição de vagas ao clicar em "atualizar vaga", retorna 500</li>
            <li>Trocar slug da dominio pizza</li>
            <li>Problemas para subir foto, fazer prova e salvar informações de candidato</li>
            <li>Em criar vagas, o campo de provas (estrelinhas) não está mudando de acordo com a position</li>
            <li>Ao editar um endereço, está criando mais endereços principais(is_main)</li>
            <li>No cadastro do candidato, na parte de área profissional quando o candidato dar upload em um currículo muito grande, colocar um feedback que o tamanho máximo foi excedido</li>
            <li>Em provas, vem a prova, mas não vem perguntas</li>
            <li>Na tela de cadastro de uma nova vaga no mobile alguns campos estão quebrando</li>
            <li>Login da empresa Coco Bambu</li>
            <li>Cadastro de empresa erro no password</li>
            <li>Pagina de Slug fora do ar</li>
            <li>"Problema Base de dados nova - Tabela campany_calendarhours; variável ""candidate_id"""</li>
            <li>Implantação do docker em produção</li>
            <li>Adicionar Mensagens do Whatsapp a Fila</li>
            <li>Checkbox Vagas Facebook</li>
            <li>Checkbox Entrevista online</li>
            <li>Fila para API Google calendar</li>
            <li>Consumo API google Canlendar para criação das reuniões</li>
            <li>Criação de Infraestrutura docker + celery + SQS para fila</li>
            <li>Listar modulos apenas se não for de uma empresa específica</li>
            <li>"Em modal de chamar para entrevista, a quantidade de candidatos trava em 5"</li>
            <li>"No modal que a empresa escolhe, se o candidato foi pra entrevista ou nao, reduzir o tempo, de 1 dia apos, para 1hora apos"</li>
            <li>Comentar telefone do candidato zap no detalhes do candidato</li>
            <li>Customizar a mensagem de erro ao fazer login</li>
            <li>Temp token do cadastro conflitando com login de outros usuários</li>
            <li>"Em criar vagas, na parte de avaliacao de candidatos, mostrar peso dos modulos, se é basico, inter .... etc"</li>
            <li>"Formulario de empresa, não está enviando ticket e qtd funcionarios no payload, gerando erro"</li>
            <li>"em processo seletivo, em sugeridos pela worc, em alguns casos, positions vem NONE"</li>
            <li>"Em processo seletivo, o coraçao está por cima do nome"</li>
            <li>Criar template para Pull request no git</li>
            <li>"Em cadastro de empresa, ticket medio vazio, está dando pau na hora de salvar"</li>
            <li>Erro ao gerar slug</li>
            <li>Adicionar Favicon da Worc no head do site</li>
            <li>Adicionar favicon da Worc no head do Site</li>
            <li>Não exibir Curso: Bem Vindos à Z Deli para colaboradores da Z Deli - urgente</li>
            <li>O tempo em segundos do timer das provas está com comportamento errado</li>
            <li>Erro no timer da prova todas indo pra segunda question</li>
            <li>Em processo seletivo a barra de rolagem das colunas está colada nos cards</li>
            <li>Formulario de candidato nao aceita imagens que nao sejam PNG</li>
            <li>Em equipe na nuvem na aba CLTs esta duplicando registros</li>
            <li>Saber se candidatos do face estao usado ou sendo usados na plataforma</li>
            <li>O responsivo está ficando sem o topo no cadastro de cliente</li>
            <li>"ao invés de aparecer o endereço no modal da vaga, aparece Entrevista on-line em vagas marcadas como ""Agendar entrevista online automaticamente?"""</li>
            <li>ao clicar em quero trabalhar esta dando erro</li>
            <li>mandar payload de no modal da vaga se é freela ou CLT</li>
            <li>está permitindo cadastrar 4 posição ao invés de 3</li>
            <li>na equipe na nuvem precisa ter o a aba CLT-intermitente (também no slug)</li>
            <li>"o candidato pode ficar disponível [sim, não] (em background se passou 30 dias ele fica disponível) "</li>
            <li>"filtro de cidade está, estranho"</li>
            <li>imagens na slug não funcionam</li>
            <li>chamar para entrevista de candidatos vindo do facebook nao existe dentro do modal</li>
            <li>"Na prova quando tem imagens como options, não tem a opção ""próximo"""</li>
            <li>"No editar/cadastro candidato ao apenas clicar no campo 'complemento', ele está obrigando a cadastra-lo."</li>
            <li>"Perfil da Michele não está conseguindo editar, está estourando erro na tela quando clica em salvar"</li>
            <li>"colocar na frente do nome da prova se a prova é básico, médio ou avançado"</li>
            <li>" Se CLT Fixo e CLT Intermitente o candidato pode ficar disponível [sim, não]         (em background se passou 30 dias ele fica disponível)"</li>
            <li>Configurações de slug da company     Se Freelancer Pode ficar disponível</li>
            <li>ver distância não está funcionando listando: “distância não encontrada”</li>
            <li>"Só é permitido ficar disponível para trabalho, se não veio da slug, ou seja, não é para ficar  disponível os candidatos que vieram da Slug."</li>
            <li>"validar as experiências dos perfils, tem perfils faltando informações"</li>
            <li>ao clicar em sou colaborador esta obrigando colocar filial</li>
            <li>"No modal do candidato, em experiencias, alguns estao vindo com invalid date, ex: cadastro castejon e carra o menu vagas em candidato deve se chamar entrevistas"</li>
            <li>6) Lista de Bugs (Castejon)</li>
            <li>Sugestão,Segmentar equipe na nuvem por filial</li>
            <li>Endereço errado no perfil [ALL FRIES]</li>
            <li>"Cadastro de empresa feito direto pela plataforma não cria ""nome fantasia""."</li>
            <li>Informações de experiências passadas do candidato multiplicadas</li>
            <li>Datas e horários de vagas criadas não conseguem ser editados e/ou atualizados</li>
            <li>Dados de CPF e RG apagam depois de preencher cadastro do candidato</li>
            <li>"Bug ""CPF já utilizado"" na edição do perfil sem motivo aparente"</li>
            <li>BUG cadastro do candidato - Não é possível fazer upload ou alterar a FOTO</li>
            <li>"Falhas dentro do ""Buscar Candidatos"""</li>
            <li>Página Slug com url sem o nome da empresa</li>
            <li>"Falhas no ""Buscar Candidatos"""</li>
            <li>Telefones inexistentes - PRECISAMOS DE UMA VALIDADOR DE TELEFONE NO CADASTRO DO CANDIDATO OU ENTÃO DEIXAR FIXO O +55 ANTES DO CAMPO DE TELEFONE</li>
            <li>"Não aparece no perfil do candidato que ele selecionou ""primeiro emprego"""</li>
            <li>Candidatos não aparecem na busca</li>
            <li>Datas inválidas nas experiências do Candidato ( casa Bauducco)</li>
            <li>Solicitação,"Candidatos não conseguem preencher o CPF e, portanto, não conseguem completar o cadastro (estamos em contato com 1000 candidatos de São José dos Campos tentando preencher o cadastro e não conseguem)"</li>
            <li>Alterações necessárias no pop-up de convite de entrevista</li>
            <li>Perfis duplicados</li>
            <li>Bug candidato - Botão de disponibilidade para trabalho fica indisponível sempre que se entra na área de editar perfil</li>
            <li>Solicitação,Erro ao tentar refazer a prova</li>
            <li>Solicitação,Erro 404 ao tentar completar meu perfil</li>
            <li>"Problema Base de dados nova - Tabela campany_calendarhours; variável ""candidate_id"""</li>
            <li>Fotos que estão registradas não estão sendo transferidas para a página Slug</li>
            <li>Não exibir Curso: Bem Vindos à Z Deli para colaboradores da Z Deli - urgente</li>
            <li>Disponivel para trabalho retornando sempre false</li>
            <li>Slug com problemas para mostrar vagas</li>
            <li>Slug apresentando erro ao ser acessado trabalhe aqui</li>
            <li>Title do app ausente</li>
            <li>Css quebrando em cadastro-da-company quando acessado direto</li>
            <li>Correção de alguns layouts</li>
            <li>Problema ao selecionar posicao em freela na agenda</li>
            <li>Problema ao criar vaga freela direto na agenda</li>
            <li>definir limitação de 3 posições para candidatos</li>
            <li>Perfil de candidato com erro nas data das experiências</li>
            <li>"Em modal de chamar para entrevista, q quantidade de candidatos, trava em 5"</li>
            <li>Sinalizar na descrição da Vaga o que é freelancer e fixo no momento de chamar para entrevista</li>
            <li>Solicitação,Necessário troca de endereço do Cliente [Niu Sushi]</li>
            <li>Solicitação,"Página slug Jequitibá não está devidamente ""pronta"""</li>
            <li>BUG plataforma nova - Mensagem incorreta no pop up de convite</li>
            <li>Erro no timer de Provas</li>
            <li>Erro no layout de provas mobile</li>
            <li>Bug total nas provas técnicas para os candidatos !</li>
            <li>Usuários Cadastrados via integração do Facebook estão vindo sem CPF e na hora de Editar o perfil não conseguem adicionar</li>
            <li>Solicitação,Agenda bom Bug para o cliente Cidadão do Mundo</li>
          </ul>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Criação de vaga com link para o MEET ONLINE</h2>
        <div className='tags'>
          <span className='tag block'>bloqueado</span>
        </div>
        <div className='content'>
          <p className='description'>
            Devido a algumas imposições que o google faz com as contas, está bem dificil acharmos uma solução para isso, mas nosso time está trabalhando e pensando fora da caixa para que isso aconteça de um jeito ou de outro
          </p> 
        </div>    
      </LayoutDefault>


    </>
  );
}
 
export default Sexta2309;