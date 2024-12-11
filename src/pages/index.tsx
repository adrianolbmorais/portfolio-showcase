import React from 'react';

const IndexPage: React.FC = () => {
    return (
        <div>
            {/* Aqui você pode adicionar o conteúdo das seções do portfólio */}
            <section id="sobre">
                <h2>Sobre mim</h2>
                <p>Conteúdo sobre você.</p>
            </section>
            <section id="projetos">
                <h2>Meus Projetos</h2>
                <p>Links e descrições dos seus projetos.</p>
            </section>
            <section id="contato">
                <h2>Contato</h2>
                <p>Formulário de contato ou informações.</p>
            </section>
        </div>
    );
}

export default IndexPage;