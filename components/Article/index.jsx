import Typography from "antd/lib/typography";

const { Paragraph, Title } = Typography;

export default function Description() {
  return (
    <div style={{ width: "80vw" }}>
      <Title style={{ textAlign: "center", margin: "1em" }}>Tema</Title>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Com o advento da internet, cada vez mais
        celebridades e famosos passaram a se expressar em meio virtual. No
        entanto, não apenas personidades já existentes passaram a se popularizar
        mais no campo virtual, mas também novas personalidades surgiram.
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Assim, em meio a esse cenário da <i>internet</i>
        , diferentes dinâmicas de interação social passaram a se fazer
        presentes. Num cenário virtual, apesar de ser possível transmissão da
        imagem de uma pessoa por meio de uso de câmeras, tal recurso não é
        necessário para que haja trova de informações, criação de conteúdo, e
        engajamento.
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Com o passar do tempo, para certos públicos,
        esse recurso tornara-se não apenas desnecessário, mas também
        desinteressasnte. Assim, cada vez mais, surgiram personalidades no qual
        a sua identidade pessoal não fora revelada, permanecendo assim no
        anonimato, mas ainda assim ganhando fama; ou ainda, personalidades que
        por vezes até tiveram sua identidade revelada, mas a figura pública que
        eles representam é desconexa dessa identidade, por vezes, assim, estando
        conectada à figura de um avatar virtual que representa aquele indivíduo.
        Inclusive, em gêneros de conteúdo como os chamados <i>v-tubers</i>, ou
        youtubers virtuais, são utilizados programas de reconhecimento de
        movimento para que o movimento corporal e facial dos <i>influencers</i>{" "}
        em questão seja reproduzido no avatar; assim, trazendo expressão facial
        para aquela personalidade sem que seu rosto real seja utilizado.
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        No entanto, há aspectos negativos no anonimarto de personalidades anônimas.
        Em relação aos próprios criadores de conteúdo, nota-se que, apesar do
        anonimato protegê-los de muitas ameaças virtuais; às vezes a ausência de uma
        identidade pública pode levar ao efeito contrário, pois a busca por formas de
        obter informações sobre tais indivíduos por pessoas mal-intencionadas acaba
        por ser muito mais comum; e como tais personalidades prezam pelo anonimato,
        as consequências de terem suas identidades descobertas pode ser bastante
        severa. Já em relação aos espectadores; estes podem se tornar muito mais
        apegados psicologicamente a tais personalidades virtuais; pois, justamente
        devido à suspensão de descrença, cria-se uma ideal fantasioso em relação
        às qualidades do influenciador digital, assim, aqueles que o assistem o
        podem o tomar como exemplo absoluto a ser seguido, ou ainda, vê-los como
        substitutos a amizades reais, criando-se assim uma relação parassocial
        no qual muitos acreditam estar contruindo uma relação de proximidade com
        tais personalidades ao mandarem mensagens no chat de <i>livestreams</i>      
      </Paragraph>
    </div>
  );
}
