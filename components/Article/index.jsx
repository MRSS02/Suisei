import Typography from "antd/lib/typography";

const { Paragraph, Title } = Typography;

export default function Description() {
  return (
    <div style={{ width: "80vw" }}>
      <Title style={{ textAlign: "center", margin: "1em" }}>Tema</Title>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Com o advento da internet, cada vez mais
        celebridades e famosos passaram a se expressar em meio virtual. Em meio
        a isso, também surgiu um espaço para que qualquer pessoa pudesse ter uma
        carreira e se tornar uma personalidade.
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Assim, em meio a esse cenário, diferentes
        dinâmicas de interação social passaram a se fazer presentes. Num cenário
        virtual, apesar de ser possível transmissão da imagem de uma pessoa por
        meio de uso de câmeras, tal recurso não é necessário para que haja troca
        de informações, criação de conteúdo, e engajamento.
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Com o passar do tempo, para certos públicos,
        esse recurso tornou-se não apenas desnecessário, mas também
        desinteressasnte. Assim, cada vez mais, surgem personalidades no qual a
        sua identidade pessoal não é revelada. Dessa forma, por mais
        contraditória que pareça, há pessoas que permanecem no anonimato, mas
        ainda assim ganham fama. Ou ainda, personalidades que por vezes até
        tiveram sua identidade revelada, possuem uma fama na internet
        completamente desconexa dessa identidade, de forma que sua aparência não
        tem nenhuma relação com sua fama. Isso traz à tona uma pergunta: Qual é
        a identidade é utilizada por essas pessoas então?
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Algumas têm sua identidade conectada à figura de
        um avatar virtual que representa aquele indivíduo. Alguns gêneros de
        conteúdo são exclusivamente dedicados a isso, como os chamados{" "}
        <i>v-tubers</i>, ou youtubers virtuais, são utilizados programas de
        reconhecimento de movimento para simular movimento corporal em seus
        avatares; e os <i>story-time animators</i>, que expressam suas histórias
        e ideias com desenhos e animações feitos manualmente. Dessa forma esses
        dois tipos de criadores conseguem manter sua privacidade e atingir um
        nicho que procura por esse conteúdo.
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;No entanto, há aspectos negativos nesse
        processo. Em relação aos próprios criadores de conteúdo, nota-se que,
        apesar do anonimato protegê-los de muitas ameaças virtuais; às vezes a
        ausência de uma identidade pública pode levar ao efeito contrário, pois
        a busca por formas de obter informações sobre tais indivíduos por
        pessoas mal-intencionadas acaba por ser muito mais comum, tal prática é
        chamada de <i>"doxxing"</i>. Além disso, como tais personalidades prezam
        pelo anonimato, as consequências de terem suas identidades descobertas
        pode ser bastante severa.
      </Paragraph>
      <Paragraph style={{ textAlign: "justify" }}>
        Já em relação aos espectadores, estes podem se tornar muito mais
        apegados psicologicamente a tais personalidades virtuais devido à
        <i>suspensão de descrença</i>, uma tendência do ser humano de ter
        perspectivas diferentes de algo que claramente não é real, como
        animações. Alguns espectadores criam um ideal fantasioso em relação às
        qualidades do influenciador digital, tomando-o como exemplo absoluto a
        ser seguido, ou ainda, vê-los como substitutos a amizades reais,
        criando-se assim uma relação parassocial no qual muitos acreditam estar
        contruindo uma relação de proximidade com tais personalidades ao
        mandarem mensagens no chat de <i>livestreams</i>.
      </Paragraph>
    </div>
  );
}
