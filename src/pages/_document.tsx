import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Explore meu portfólio e descubra projetos inovadores que combinam criatividade e tecnologia. Sou um desenvolvedor apaixonado por transformar ideias em soluções reais. Vamos construir o futuro juntos? Entre em contato e faça parte dessa jornada!" />
                    <meta name="robots" content="index, follow" />
                    <meta name="keywords" content="portfólio, portfolio, desenvolvedor, front-end, back-end, projetos, contato" />

                    <title>Meu Portfólio - Desenvolvedor Full Stack</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;