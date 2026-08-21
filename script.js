const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você cresceu na quebrada da Vila Sônia vendo seus amigos tomarem caminhos bem diferentes. Um quer o topo da música, outro busca a fé e outro tenta a sorte na correria do dia a dia. Qual o seu primeiro pensamento sobre o futuro?",
        alternativas: [
            {
                texto: "Tudo aqui é mais difícil, a chance de dar errado é grande.",
                afirmacao: "No início, você sentiu o peso da realidade e o medo das poucas oportunidades na periferia."
            },
            {
                texto: "Se a gente correr pelo certo e se apoiar, todo mundo vence!",
                afirmacao: "Você sempre acreditou no poder da amizade e na ambição de mudar de vida."
            }
        ]
    },
    {
        enunciado: "Seu amigo Mc Doni chama você para ajudar na produção de um novo som de funk que pode explodir nas redes sociais. Como você decide colaborar?",
        alternativas: [
            {
                texto: "Usa a internet para pesquisar ritmos, batidas e referências do mercado para montar uma estratégia de lançamento.",
                afirmacao: "Conseguiu usar a visão de mercado para impulsionar a carreira do seu parceiro."
            },
            {
                texto: "Ajuda a compor a letra com base nas suas vivências reais no bairro e nas histórias dos seus amigos.",
                afirmacao: "Preferiu apostar na autenticidade da favela para criar algo verdadeiro."
            }
        ]
    },
    {
        enunciado: "Na comunidade, surge uma grande oportunidade de construir um espaço comunitário de cultura e acolhimento para os jovens. Qual postura você assume?",
        alternativas: [
            {
                texto: "Apoia o projeto focado no poder da arte, do funk e da música para dar voz aos jovens.",
                afirmacao: "Defendeu o funk e a arte urbana como ferramentas legítimas de transformação social."
            },
            {
                texto: "Apoia o projeto focando em aços sociais, acolhimento espiritual e apoio comunitário.",
                afirmacao: "Acreditou na fé e no trabalho comunitário para resgatar e proteger quem precisa."
            }
        ]
    },
    {
        enunciado: "Um festival de música convida o pessoal do bairro para apresentar um projeto visual que represente a identidade da periferia. O que você faz?",
        alternativas: [
            {
                texto: "Organiza uma oficina de grafite e fotografia local com os jovens da comunidade.",
                afirmacao: "Valorizou os talentos locais e ensinou técnicas visuais para a própria galera do bairro."
            },
            {
                texto: "Usa ferramentas digitais e edição no computador para criar um clipe profissional rapidamente.",
                afirmacao: "Aproveitou a tecnologia visual para dar uma cara profissional e alcançar mais público fora da favela."
            }
        ]
    },
    {
        enunciado: "No auge da caminhada, surge um grande dilema: uma proposta promete dinheiro rápido, mas pode comprometer seus princípios e a segurança dos seus amigos. Qual é a sua atitude?",
        alternativas: [
            {
                texto: "Recusa a proposta. Mantém a lealdade aos amigos e busca o caminho mais seguro a longo prazo.",
                afirmacao: "Mostrou que a lealdade e a consciência tranquila valem mais do que qualquer atalho fácil."
            },
            {
                texto: "Procura uma terceira via: renegocia os termos e busca uma saída em que ninguém saia prejudicado.",
                afirmacao: "Usou a visão estratégica da correria para proteger seu grupo sem perder a oportunidade de crescer."
            }
        ]
    }
