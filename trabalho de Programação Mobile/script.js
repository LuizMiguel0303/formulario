javascript
// script.js
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function openModal(modalId) {
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');

    if (articles[modalId]) {
        modalBody.innerHTML = articles[modalId].content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('articleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openMobModal(mobId) {
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');

    if (mobData[mobId]) {
        const mob = mobData[mobId];
        modalBody.innerHTML = `
            <div class="mob-detail">
                <h2>${mob.name}</h2>
                <div class="mob-detail-icon">
                    <img src="${mob.image}" alt="${mob.name}">
                </div>
                <p><strong>Tipo:</strong> ${mob.type}</p>
                <p><strong>Vida:</strong> ${mob.health}</p>
                
                <h3>Descrição</h3>
                <p>${mob.description}</p>
                
                <div class="mob-stats">
                    <div class="stat-box">
                        <strong>💪 Dano</strong>
                        <p>${mob.damage}</p>
                    </div>
                    <div class="stat-box">
                        <strong>📍 Local de Spawn</strong>
                        <p>${mob.spawn}</p>
                    </div>
                    <div class="stat-box">
                        <strong>🎁 Drops</strong>
                        <p>${mob.drops}</p>
                    </div>
                </div>
                
                <h3>Dicas de Combate</h3>
                <p>${mob.tips}</p>
            </div>
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
        closeModal();
    }
}

const articles = {
    modal1: {
        title: '🏰 Construções Épicas de Castelos',
        content: `
            <h2>Construa Fortalezas Impressionantes!</h2>
            <p><strong>Data:</strong> 24 de Outubro de 2025 | <strong>Autor:</strong> Steve</p>
            
            <h3>1. Castelo Medieval Clássico</h3>
            <p>Comece com uma base sólida usando pedra, tijolos de pedra e andesito. Use torres de canto com pelo menos 20 blocos de altura para um visual imponente. Adicione ameias no topo das muralhas usando escadas e lajes de pedra.</p>
            
            <h3>2. Fortaleza do Nether</h3>
            <p>Utilize tijolos do Nether, basalto polido e blackstone para criar uma fortaleza sombria e intimidadora. Adicione lava como elemento decorativo e defensivo em fossos e entradas.</p>
            
            <h3>3. Castelo Flutuante</h3>
            <p>Construa ilhas flutuantes conectadas por pontes suspensas usando correntes e cercas. Use âncoras e correntes para dar a impressão de que o castelo está ancorado nas nuvens.</p>
            
            <h3>Dicas Essenciais de Construção:</h3>
            <ul>
                <li>🧱 Misture diferentes tipos de pedra para adicionar textura e profundidade</li>
                <li>🚪 Crie entradas grandiosas com arcos altos usando escadas invertidas</li>
                <li>💡 Use lanternas, tochas e tochas de alma para iluminação atmosférica</li>
                <li>🌿 Adicione jardins internos, externos e terraços com vegetação</li>
                <li>⚔ Construa uma sala do trono épica com detalhes em ouro e diamante</li>
                <li>🏹 Adicione torres de vigia estratégicas para defesa</li>
                <li>🎨 Use bandeiras customizadas para decoração e identidade</li>
            </ul>
            
            <h3>Materiais Recomendados:</h3>
            <p><strong>Estrutura Principal:</strong> Pedra, tijolos de pedra, andesito polido, diorito</p>
            <p><strong>Detalhes:</strong> Madeira de carvalho escuro, vigas de spruce, vidro colorido</p>
            <p><strong>Decoração:</strong> Ferro, ouro, bandeiras, tochas, lanternas</p>
            
            <h3>Técnicas Avançadas:</h3>
            <p>Use escadas e lajes para criar detalhes arquitetônicos complexos. Varie a altura das torres para criar silhueta interessante. Adicione pontes levadiças funcionais com pistões e redstone!</p>
        `
    },
    modal2: {
        title: '💎 Mineração Profissional',
        content: `
            <h2>Encontre Todos os Minérios Preciosos!</h2>
            <p><strong>Data:</strong> 22 de Outubro de 2025 | <strong>Autor:</strong> Alex</p>
            
            <h3>Melhores Camadas para Cada Minério (1.18+)</h3>
            <p><strong>Diamantes:</strong> Camada Y -59 (melhor taxa de spawn)</p>
            <p><strong>Ferro:</strong> Picos em Y 16 e Y 232</p>
            <p><strong>Ouro:</strong> Camada Y -16 no Overworld, qualquer altura no Nether</p>
            <p><strong>Redstone:</strong> Camadas Y -64 a -32</p>
            <p><strong>Lapis Lazuli:</strong> Camada Y 0</p>
            <p><strong>Cobre:</strong> Camadas Y 48 (pico) e Y 0</p>
            <p><strong>Carvão:</strong> Camadas Y 96 e Y 136</p>
            <p><strong>Esmeralda:</strong> Apenas em biomas de montanha, Y 224</p>
            
            <h3>Técnicas de Mineração Eficientes</h3>
            
            <h4>1. Mineração em Linha (Branch Mining)</h4>
            <p>Cave um corredor principal de 2x2 blocos. A cada 2 blocos, cave túneis lateralis. Esta técnica maximiza a exposição de blocos com mínimo esforço.</p>
            
            <h4>2. Mineração em Escada</h4>
            <p>Cave descendo em diagonal (1 bloco para frente, 1 para baixo). Econômiza ferramentas e permite retorno fácil.</p>
            
            <h4>3. Mineração de Cavernas</h4>
            <p>Explore cavernas naturais - mais perigoso mas extremamente recompensador. Sempre tenha comida e equipamento de backup!</p>
            
            <h3>Equipamento Essencial de Mineração:</h3>
            <ul>
                <li>⛏ Picareta de Ferro ou Diamante (mínimo para diamantes)</li>
                <li>⛏ Picareta de pedra para blocos comuns (economiza durabilidade)</li>
                <li>🍗 Stack completo de comida (bife ou porco assado)</li>
                <li>💡 3+ stacks de tochas (SEMPRE leve mais do que acha necessário)</li>
                <li>🪣 Balde de água (essencial para lava e emergências)</li>
                <li>🛡 Armadura completa de ferro no mínimo</li>
                <li>⚔ Espada de ferro ou melhor</li>
                <li>📦 Baú extra para armazenar items</li>
                <li>🪨 Blocos de construção (cobblestone) para emergências</li>
            </ul>
            
            <h3>Encantamentos Ideais:</h3>
            <p><strong>Picareta Principal:</strong> Eficiência V, Fortuna III, Inquebrável III</p>
            <p><strong>Picareta Alternativa:</strong> Eficiência V, Toque Suave, Inquebrável III</p>
            <p><strong>Armadura:</strong> Proteção IV em todas as peças, Respiração III no elmo</p>
            <p><strong>Botas:</strong> Passo Profundo III (essencial para reduzir dano de queda)</p>
            
            <h3>Dicas Pro:</h3>
            <ul>
                <li>Sempre cave em linha reta, nunca diretamente para baixo!</li>
                <li>Marque seu caminho com tochas sempre no mesmo lado</li>
                <li>Leve uma cama para resetar seu spawn</li>
                <li>Use poções de visão noturna para facilitar</li>
                <li>Sempre ouça o som de lava e água antes de cavar</li>
            </ul>
        `
    },
    modal3: {
        title: '🌾 Fazendas Automáticas',
        content: `
            <h2>Automatize Sua Produção de Recursos!</h2>
            <p><strong>Data:</strong> 20 de Outubro de 2025 | <strong>Autor:</strong> Villager</p>
            
            <h3>1. Fazenda de Trigo/Batata/Cenoura Automática</h3>
            <p>Use villagers fazendeiros com inventário cheio e um sistema de coleta com hopper minecarts. Coloque composteiras para os villagers trabalharem e trocarem items entre si.</p>
            <p><strong>Materiais:</strong> 3+ villagers, camas, composteiras, hoppers, minecarts com hopper, trilhos.</p>
            
            <h3>2. Fazenda de Ferro (Iron Farm)</h3>
            <p>Construa uma plataforma elevada com 3 villagers, 3 camas e 1 estação de trabalho. Coloque um zombie assustando os villagers através de um bloco de vidro. Golems de ferro spawnarão constantemente e serão mortos por lava ou queda.</p>
            <p><strong>Produção:</strong> ~300-400 iron ingots por hora (design otimizado)</p>
            
            <h3>3. Fazenda de Mob (Mob Grinder)</h3>
            <p>Crie uma torre escura de 9x9 onde mobs podem spawnar. Canal de água os empurra para um ponto central onde caem 23 blocos, ficando com 1 HP. Mate com um golpe para coletar XP e drops.</p>
            <p><strong>Altura ideal:</strong> 128 blocos acima do oceano para máximo spawn</p>
            
            <h3>4. Fazenda de Melancia/Abóbora Automática</h3>
            <p>Use observers detectando o crescimento e pistons para quebrar automaticamente. Hoppers com minecarts coletam os drops.</p>
            <p><strong>Design compacto:</strong> 4x4 blocos produz ~100 items/hora</p>
            
            <h3>5. Fazenda de Cana-de-Açúcar Zero-Tick (Patched)</h3>
            <p><strong>ATENÇÃO:</strong> Zero-tick farms foram removidas nas versões recentes. Use fazendas tradicionais com observers e pistões.</p>
            
            <h3>6. Fazenda de XP de Enderman</h3>
            <p>No End, construa uma plataforma 128 blocos abaixo da ilha principal. Endermans spawnam e caem em um tubo onde ficam presos a 1 HP. Método mais eficiente de XP no jogo!</p>
            
            <h3>Circuitos de Redstone Essenciais:</h3>
            <ul>
                <li>🔴 Clock de Redstone (para timers e automação rítmica)</li>
                <li>📡 Observer + Piston (detecção e colheita automática)</li>
                <li>🚂 Hopper Minecarts (coleta de items em grande área)</li>
                <li>📦 Sistema de Classificação (sorting com comparadores)</li>
                <li>⏰ Daylight Sensor (automação baseada em tempo)</li>
                <li>🎯 Item Filter (filtros de itens específicos)</li>
            </ul>
            
            <h3>Dicas de Otimização:</h3>
            <ul>
                <li>Construa fazendas em chunks carregados (spawn chunks ou com chunk loaders)</li>
                <li>Use vidro ou half slabs para prevenir spawns indesejados</li>
                <li>Iluminar área ao redor aumenta eficiência de mob farms</li>
                <li>Fazendas de villager precisam de 20 blocos livres horizontalmente</li>
                <li>Use nametags em villagers importantes para não despawnarem</li>
            </ul>
            
            <p><strong>Dica Pro:</strong> Construa suas fazendas modulares para fácil expansão e manutenção!</p>
        `
    },
    modal4: {
        title: '🗡 Vencendo o Ender Dragon',
        content: `
            <h2>Prepare-se para a Batalha Final!</h2>
            <p><strong>Data:</strong> 18 de Outubro de 2025 | <strong>Autor:</strong> Herobrine</p>
            
            <h3>Preparação Completa:</h3>
            
            <h4>Equipamento Obrigatório:</h4>
            <ul>
                <li>⚔ Espada de Diamante ou Netherite (Sharpness V, Knockback II)</li>
                <li>🏹 Arco (Power V, Infinity I) + 1 flecha</li>
                <li>🛡 Armadura completa de Diamante/Netherite (Proteção IV todas peças)</li>
                <li>🍎 10+ Maçãs douradas (Golden Apples)</li>
                <li>🧪 Poções de Cura Instantânea II (mínimo 10)</li>
                <li>🧪 Poções de Força II (2-3)</li>
                <li>🧪 Poções de Regeneração II (2-3)</li>
                <li>🧪 Poção de Respiração Aquática (útil vs sopro do dragão)</li>
                <li>🪜 200+ blocos de construção (cobblestone, netherrack)</li>
                <li>🪣 2+ baldes de água</li>
                <li>🛏 Cama extra (NÃO USE NO END - EXPLODE!)</li>
                <li>🍖 Stack de comida (bife ou porco assado)</li>
                <li>⛏ Picareta de Diamante (para obsidian de emergência)</li>
            </ul>
            
            <h3>Estratégia Fase por Fase:</h3>
            
            <h4>FASE 1: Destruir os Cristais do End</h4>
            <p>Os cristais curam o dragão! Destrua todos os 10 cristais antes de atacar o dragão.</p>
            <ul>
                <li>🎯 Use arco para cristais expostos no alto das torres</li>
                <li>🧗 Construa pilares de blocos até os cristais em gaiolas de ferro</li>
                <li>💥 Cuidado! Cristais explodem ao serem destruídos</li>
                <li>🏔 Torres de obsidian: suba com pérolas do end ou pilares</li>
                <li>🛡 Use blocos para se proteger da explosão</li>
            </ul>
            
            <h4>FASE 2: Atacar o Ender Dragon</h4>
            <p><strong>Padrões de Ataque do Dragão:</strong></p>
            <ul>
                <li>✈ <strong>Voo Circular:</strong> Atire com arco, mire à frente do dragão</li>
                <li>🔥 <strong>Sopro de Dragão:</strong> EVITE! Causa dano contínuo severo. Use poção de respiração aquática para reduzir dano</li>
                <li>⚡ <strong>Carregada:</strong> Dragão voa direto em você. Desvie e ataque ao passar</li>
                <li>🏛 <strong>Pouso no Portal:</strong> HORA DO ATAQUE! Corra e ataque a cabeça com espada</li>
            </ul>
            
            <h3>Táticas Avançadas:</h3>
            
            <h4>Método Tradicional:</h4>
            <p>Destrua todos os cristais, depois ataque com arco quando o dragão voa. Quando pousar no portal, ataque corpo-a-corpo.</p>
            
            <h4>Método Speed Run:</h4>
            <p>Leve camas para o End. Coloque cama perto da cabeça do dragão quando ele pousar e CLIQUE NELA. A explosão causa dano massivo! (Requer prática e timing perfeito)</p>
            
            <h4>Método Seguro (Iniciantes):</h4>
            <p>Construa uma pequena estrutura com teto perto do portal. Destrua cristais com cuidado. Ataque apenas quando dragão pousar. Use muitas poções de cura.</p>
            
            <h3>Dicas Cruciais:</h3>
            <ul>
                <li>⚠ NUNCA durma em cama no End - ela explode!</li>
                <li>🏃 Endermans não atacam se você usar abóbora na cabeça</li>
                <li>💧 Água pode quebrar sopro do dragão</li>
                <li>🎯 Destrua TODOS os cristais antes de focar no dragão</li>
                <li>🍎 Coma maçãs douradas ANTES de perder muita vida</li>
                <li>🔊 Som de batida de asa indica que dragão está próximo</li>
                <li>📍 Marque posição do portal com blocos brilhantes</li>
            </ul>
            
            <h3>Após a Vitória:</h3>
            <p><strong>Recompensas:</strong></p>
            <ul>
                <li>🎉 12.000 XP (níveis instantâneos!)</li>
                <li>🥚 Ovo do Dragão (item decorativo raro)</li>
                <li>🌌 Acesso ao End Exterior (End Cities, Elytras, Shulkers)</li>
                <li>🏆 Conquista "Libertando o End"</li>
            </ul>
            
            <p><strong>Gateway do End:</strong> Após matar o dragão, portais aparecem nas bordas da ilha. Jogue pérola do end através deles para acessar End Cities!</p>
        `
    },
    modal5: {
        title: '🔴 Redstone do Zero ao Avançado',
        content: `
            <h2>Domine os Circuitos do Minecraft!</h2>
            <p><strong>Data:</strong> 15 de Outubro de 2025 | <strong>Autor:</strong> Engineer</p>
            
            <h3>O Básico da Redstone</h3>
            <p>Redstone é o "sistema elétrico" do Minecraft. Permite criar circuitos, máquinas automáticas e mecanismos complexos!</p>
            
            <h3>Componentes Fundamentais:</h3>
            <ul>
                <li>🔴 <strong>Redstone Dust:</strong> Transmite sinal por até 15 blocos</li>
                <li>🔦 <strong>Tocha de Redstone:</strong> Fonte de energia constante e inversor</li>
                <li>🔘 <strong>Botão:</strong> Pulso curto de energia (1 segundo madeira, 2.5 segundos pedra)</li>
                <li>🎚 <strong>Alavanca:</strong> Liga/desliga permanentemente</li>
                <li>🚪 <strong>Placa de Pressão:</strong> Ativa quando algo está em cima</li>
                <li>🎯 <strong>Alvo:</strong> Emite sinal quando atingido por projétil</li>
            </ul>
            
            <h3>Componentes Avançados:</h3>
            <ul>
                <li>🔄 <strong>Repetidor:</strong> Amplifica sinal, adiciona delay (1-4 ticks)</li>
                <li>🔃 <strong>Comparador:</strong> Compara sinais, modo subtração</li>
                <li>📡 <strong>Observer:</strong> Detecta mudanças de blocos</li>
                <li>🎚 <strong>Pistão:</strong> Empurra até 12 blocos</li>
                <li>🎚 <strong>Pistão Grudento:</strong> Empurra e puxa blocos</li>
                <li>💡 <strong>Lâmpada de Redstone:</strong> Iluminação controlada</li>
                <li>🎵 <strong>Note Block:</strong> Emite sons musicais</li>
            </ul>
            
            <h3>Portas Lógicas Básicas:</h3>
            
            <h4>1. Porta NOT (Inversor)</h4>
            <p>Usa tocha de redstone. Se input está ligado, output desliga. Se input desliga, output liga.</p>
            
            <h4>2. Porta OR</h4>
            <p>Se QUALQUER input está ligado, output liga. Use dois inputs se juntando em um ponto.</p>
            
            <h4>3. Porta AND</h4>
            <p>TODOS inputs precisam estar ligados para output ligar. Use tochas e repetidores em série.</p>
            
            <h4>4. Porta XOR</h4>
            <p>Output liga se inputs são DIFERENTES. Útil para sistemas de dois interruptores.</p>
            
            <h3>Projetos para Iniciantes:</h3>
            
            <h4>1. Porta Automática</h4>
            <p>Placa de pressão conectada a porta de ferro. Quando pisar, porta abre!</p>
            
            <h4>2. Sistema de Iluminação</h4>
            <p>Alavanca conectada a lâmpadas de redstone em sua casa.</p>
            
            <h4>3. Elevador de Pistão</h4>
            <p>Pistões empilhados com circuito de delay para criar elevador.</p>
            
            <h3>Projetos Intermediários:</h3>
            
            <h4>1. Fazenda Automática</h4>
            <p>Observer detecta crescimento de planta, ativa pistão que colhe.</p>
            
            <h4>2. Sistema de Classificação</h4>
            <p>Hoppers + comparadores separam items automaticamente em baús.</p>
            
            <h4>3. Porta Secreta</h4>
            <p>Pistões grudentos movem parede de blocos revelando entrada escondida.</p>
            
            <h3>Projetos Avançados:</h3>
            
            <h4>1. Calculadora</h4>
            <p>Sistema de portas lógicas que realiza operações matemáticas básicas.</p>
            
            <h4>2. Mob Farm Automática</h4>
            <p>Sistema complexo de detecção, coleta e processamento de mobs.</p>
            
            <h4>3. Sistema de Armazenamento Massivo</h4>
            <p>Rede de hoppers e droppers organizando centenas de items.</p>
            
            <h3>Dicas Profissionais:</h3>
            <ul>
                <li>⏱ 1 tick redstone = 0.1 segundos (10 ticks = 1 segundo)</li>
                <li>🔌 Redstone dust pode subir 1 bloco sem perder sinal</li>
                <li>🪜 Use blocos transparentes (vidro, glowstone) para evitar conexões indesejadas</li>
                <li>📐 Planeje seu circuito no papel antes de construir</li>
                <li>🔍 Use F3 para ver orientação de componentes</li>
                <li>💾 Salve designs úteis para reutilizar</li>
            </ul>
            
            <p><strong>Recursos de Aprendizado:</strong> Pratique em mundo criativo! Teste cada componente individualmente antes de montar circuitos complexos.</p>
        `
    },
    modal6: {
        title: '🏠 Arquitetura Moderna em Minecraft',
        content: `
            <h2>Construa Casas Modernas Incríveis!</h2>
            <p><strong>Data:</strong> 12 de Outubro de 2025 | <strong>Autor:</strong> Builder</p>
            
            <h3>Princípios de Design Moderno:</h3>
            <ul>
                <li>✨ Linhas limpas e geométricas</li>
                <li>🪟 Grande uso de vidro e transparência</li>
                <li>🎨 Paleta de cores minimalista</li>
                <li>📐 Formas cúbicas e retangulares</li>
                <li>🌳 Integração com natureza e paisagem</li>
                <li>💡 Iluminação estratégica e atmosférica</li>
            </ul>
            
            <h3>Materiais Essenciais:</h3>
            
            <h4>Estrutura Principal:</h4>
            <ul>
                <li>🤍 Concreto Branco (material moderno por excelência)</li>
                <li>⬛ Concreto Preto (contraste e detalhes)</li>
                <li>⬜ Concreto Cinza Claro (tons neutros)</li>
                <li>◼ Concreto Cinza (variação e profundidade)</li>
                <li>🪵 Madeira de Carvalho Escuro (detalhes quentes)</li>
            </ul>
            
            <h4>Acabamento e Detalhes:</h4>
            <ul>
                <li>🪟 Vidro e Vidro Temperado (paredes de vidro)</li>
                <li>🌫 Painéis de Vidro Branco (divisórias elegantes)</li>
                <li>🔲 Lajes de Quartzo (pisos e detalhes)</li>
                <li>⚫ Basalto Polido (pisos escuros)</li>
                <li>💡 Lanternas do Mar (iluminação embutida)</li>
            </ul>
            
            <h3>Técnicas de Construção:</h3>
            
            <h4>1. Método de Camadas</h4>
            <p>Construa a casa em "caixas" empilhadas com diferentes tamanhos. Crie varandas e terraços usando essas camadas desencontradas.</p>
            
            <h4>2. Paredes de Vidro</h4>
            <p>Use vidro do chão ao teto em pelo menos uma parede. Crie sensação de amplitude e conexão com exterior.</p>
            
            <h4>3. Telhado Plano</h4>
            <p>Use lajes ou blocos completos para telhado plano. Adicione jardim ou terraço no topo.</p>
            
            <h4>4. Iluminação Embutida</h4>
            <p>Esconda lanternas do mar sob tapetes ou atrás de painéis de vidro para luz difusa e moderna.</p>
            
            <h3>Layout de Planta Baixa:</h3>
            
            <h4>Térreo (20x15 blocos):</h4>
            <ul>
                <li>🚪 Entrada com pé-direito duplo</li>
                <li>🛋 Sala de estar integrada (8x10)</li>
                <li>🍳 Cozinha moderna (6x8)</li>
                <li>🍽 Área de jantar (5x6)</li>
                <li>🚽 Lavabo</li>
            </ul>
            
            <h4>Primeiro Andar:</h4>
            <ul>
                <li>🛏 Suíte master (10x8) com varanda</li>
                <li>🛏 Dois quartos (6x6 cada)</li>
                <li>🚿 Banheiro completo</li>
                <li>📚 Escritório/biblioteca</li>
            </ul>
            
            <h4>Área Externa:</h4>
            <ul>
                <li>🏊 Piscina infinita (8x4)</li>
                <li>🌳 Deck de madeira</li>
                <li>🪴 Jardim minimalista</li>
                <li>🚗 Garagem subterrânea</li>
            </ul>
            
            <h3>Decoração Interior Moderna:</h3>
            
            <h4>Sala de Estar:</h4>
            <ul>
                <li>🛋 Sofá: Escadas + Placas</li>
                <li>📺 TV: Pintura customizada na parede</li>
                <li>🕯 Mesa de centro
                : Armadilha + Tapete</li>
                <li>🪴 Plantas: Vasos com arbustos</li>
            </ul>
            
            <h4>Cozinha:</h4>
            <ul>
                <li>🔥 Fogão: Fornalha + Alçapão de ferro</li>
                <li>❄ Geladeira: Porta de ferro + Dispensador</li>
                <li>💧 Pia: Caldeirão com água</li>
                <li>🍽 Bancada: Lajes de quartzo</li>
            </ul>
            
            <h4>Quarto:</h4>
            <ul>
                <li>🛏 Cama king-size: 2 camas + banners brancos</li>
                <li>🚪 Guarda-roupa: Porta com armadura stands</li>
                <li>💡 Abajur: Cerca + Tocha/Lanterna do mar</li>
                <li>🪟 Cortinas: Banners brancos</li>
            </ul>
            
            <h3>Paletas de Cores Recomendadas:</h3>
            
            <h4>Clássico Minimalista:</h4>
            <p>Branco + Cinza Claro + Madeira de Carvalho Escuro + Toques de Preto</p>
            
            <h4>Industrial Moderno:</h4>
            <p>Concreto Cinza + Preto + Ferro + Madeira Spruce</p>
            
            <h4>Tropical Moderno:</h4>
            <p>Branco + Madeira de Acácia + Verde (Jardins) + Água (Piscina)</p>
            
            <h3>Dicas de Construção:</h3>
            <ul>
                <li>📏 Use números ímpares para dimensões (15x13 melhor que 16x14)</li>
                <li>🎨 Limite-se a 3-4 cores/materiais principais</li>
                <li>🪟 Vidro temperado não conecta visualmente - ótimo para janelas modernas</li>
                <li>💡 Ilumine TUDO - casas modernas são bem iluminadas</li>
                <li>🌿 Adicione vegetação - contraste natural com artificial</li>
                <li>📐 Use comando /fill para acelerar paredes grandes</li>
            </ul>
            
            <h3>Erros Comuns a Evitar:</h3>
            <ul>
                <li>❌ Muitos materiais diferentes (poluição visual)</li>
                <li>❌ Falta de iluminação adequada</li>
                <li>❌ Proporções estranhas entre altura e largura</li>
                <li>❌ Esquecer decoração exterior e paisagismo</li>
                <li>❌ Não planejar circulação interna</li>
            </ul>
            
            <p><strong>Dica Final:</strong> Pesquise casas modernas reais para inspiração! Adapte conceitos arquitetônicos reais para o Minecraft.</p>
        `
    }
};

const mobData = {
    zombie: {
        name: 'Zombie',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/35/Zombie_JE3_BE2.png',
        type: 'Hostil',
        health: '20 HP (10 corações)',
        damage: '2.5 - 3 corações (Normal)',
        spawn: 'Noite, em níveis de luz 7 ou menos',
        drops: 'Carne podre, Cenoura, Batata, Ferro (raro)',
        description: 'Zombies são criaturas hostis que surgem à noite ou em locais escuros. Eles perseguem jogadores e aldeões, podendo quebrar portas de madeira em dificuldade difícil. Queimam sob luz solar direta.',
        tips: 'Use espada e mantenha distância segura. Em grupos, recue para terreno elevado. Zombies bebês são mais rápidos e perigosos!'
    },
    skeleton: {
        name: 'Skeleton',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f8/Skeleton_JE5_BE5.png',
        type: 'Hostil',
        health: '20 HP (10 corações)',
        damage: '1-4 corações dependendo distância',
        spawn: 'Noite, cavernas escuras, spawners',
        drops: 'Ossos, Flechas, Arco (raro)',
        description: 'Esqueletos são arqueiros hostis que atacam à distância. São precisos e perigosos, especialmente em grupos. Queimam sob luz solar e podem usar capacetes para proteção.',
        tips: 'Esconda-se atrás de blocos e avance entre disparos. Use escudo para bloquear flechas. Ataque corpo-a-corpo é mais efetivo que trocar flechas!'
    },
    creeper: {
        name: 'Creeper',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8a/Creeper_JE2_BE1.png',
        type: 'Hostil',
        health: '20 HP (10 corações)',
        damage: '25-49 corações (explosão máxima)',
        spawn: 'Noite, em níveis de luz 7 ou menos',
        drops: 'Pólvora, Disco de música (se morto por skeleton)',
        description: 'O icônico mob verde que explode! Creepers se aproximam silenciosamente e explodem quando próximos ao jogador. São a principal causa de destruição de construções.',
        tips: 'Ataque e recue rapidamente. Sprint + ataque crítico + recuar. Use arco de longe. Cats afastam creepers! Se começar a chiar, CORRA!'
    },
    spider: {
        name: 'Spider',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/84/Spider_JE5_BE5.png',
        type: 'Hostil (Neutro de dia)',
        health: '16 HP (8 corações)',
        damage: '2-3 corações',
        spawn: 'Noite, em níveis de luz 7 ou menos',
        drops: 'Linha, Olhos de aranha',
        description: 'Aranhas podem escalar paredes e são neutras durante o dia (não atacam sem provocação). À noite, tornam-se hostis. Podem carregar esqueletos (Spider Jockey)!',
        tips: 'Use ataques de alcance ou lava. Crie cercas altas (2 blocos) que elas não conseguem escalar. Cave Spiders são menores e venenosas!'
    },
    enderman: {
        name: 'Enderman',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Enderman.png',
        type: 'Neutro',
        health: '40 HP (20 corações)',
        damage: '7-10 corações',
        spawn: 'Overworld (noite), Nether, End',
        drops: 'Pérola do End',
        description: 'Endermans são criaturas altas que podem teleportar. Neutros até serem provocados ou você olhar diretamente para eles. Essenciais para encontrar Stronghold!',
        tips: 'Não olhe diretamente nos olhos! Use abóbora na cabeça para proteção. Atacam em sequências rápidas. Lute sob teto de 2 blocos (eles têm 3 blocos). Água os machuca!'
    },
    pig: {
        name: 'Pig',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9a/Pig_JE2_BE2.png',
        type: 'Pacífico',
        health: '10 HP (5 corações)',
        damage: 'Nenhum',
        spawn: 'Planícies, florestas, biomas gramados',
        drops: 'Carne de porco crua, Carne de porco assada (se morto com fogo)',
        description: 'Porcos são animais pacíficos que podem ser criados com cenouras, batatas ou beterrabas. Podem ser montados usando sela e controlados com cenoura no vara!',
        tips: 'Crie fazendas de porcos para fonte infinita de comida. Reproduza com cenouras. Monte com sela + cenoura no vara para transporte divertido!'
    },
    cow: {
        name: 'Cow',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/Cow_JE4_BE3.png',
        type: 'Pacífico',
        health: '10 HP (5 corações)',
        damage: 'Nenhum',
        spawn: 'Planícies, florestas',
        drops: 'Couro, Carne crua, Carne assada (se morto com fogo)',
        description: 'Vacas fornecem leite (use balde) e são fonte de couro e carne. Mooshrooms são variante especial que dão cogumelos e sopa!',
        tips: 'Ordenhe leite com balde vazio. Reproduza com trigo. Essencial para livros (couro) e comida. Não mate todas - mantenha fazenda!'
    },
    sheep: {
        name: 'Sheep',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/White_Sheep_JE3_BE2.png',
        type: 'Pacífico',
        health: '8 HP (4 corações)',
        damage: 'Nenhum',
        spawn: 'Planícies, florestas, montanhas',
        drops: 'Lã (1-3 blocos), Carneiro cru/assado',
        description: 'Ovelhas fornecem lã que pode ser tosquiada infinitamente! Vêm em várias cores naturais e podem ser pintadas com corantes.',
        tips: 'Use tesoura para obter lã sem matar! Reproduza com trigo. Pinte com corantes para lã colorida. Ovelhas regrow lã comendo grama!'
    },
    wolf: {
        name: 'Wolf',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/Wolf_%28wild%29_JE2_BE1.png',
        type: 'Neutro (Domável)',
        health: '8 HP selvagem, 20 HP domesticado',
        damage: '3-4 corações',
        spawn: 'Florestas, taigas',
        drops: 'Nenhum',
        description: 'Lobos podem ser domesticados com ossos! Uma vez domados, seguem você, atacam seus inimigos e podem sentar/levantar com comando.',
        tips: 'Dome com ossos (pode levar vários). Cure com carne. Coleira vermelha = baixa vida. Sentam quando clicados. Atacam creepers se você atacar primeiro!'
    },
    cat: {
        name: 'Cat',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/54/Tabby_Cat_JE2_BE2.png',
        type: 'Pacífico (Domável)',
        health: '10 HP (5 corações)',
        damage: 'Nenhum',
        spawn: 'Vilas, pântanos (gatos pretos)',
        drops: 'Linha',
        description: 'Gatos podem ser domesticados com peixe cru! Afastam creepers e phantoms. Trazem presentes pela manhã quando dormem com você!',
        tips: 'Dome com peixe cru (salmão ou bacalhau). Sentam em camas, fornalhas e baús. AFASTAM CREEPERS - mantenha perto de casa! 11 variantes de pelagem!'
    },
    dragon: {
        name: 'Ender Dragon',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/51/Ender_Dragon.png',
        type: 'Boss Hostil',
        health: '200 HP (100 corações)',
        damage: '6-15 corações + sopro',
        spawn: 'End (dimensão final)',
        drops: '12.000 XP, Ovo do Dragão, Gateway do End',
        description: 'O boss final do Minecraft! Ender Dragon voa ao redor da ilha central do End, cura-se com cristais e possui ataques devastadores. Derrotá-lo é necessário para créditos finais.',
        tips: 'Destrua TODOS os 10 cristais primeiro! Use arco quando voa, espada quando pousa. Sopro de dragão causa dano contínuo - EVITE! Prepare-se com armadura completa encantada e muitas poções!'
    },
    villager: {
        name: 'Villager',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/63/Plains_Villager_Base.png',
        type: 'Pacífico',
        health: '20 HP (10 corações)',
        damage: 'Nenhum',
        spawn: 'Vilas, breeding',
        drops: 'Nenhum',
        description: 'Aldeões são NPCs inteligentes que vivem em vilas. Cada um tem uma profissão (fazendeiro, ferreiro, bibliotecário, etc.) e oferece trocas únicas. Essenciais para obter items raros!',
        tips: 'Proteja de zombies! Cada profissão oferece trocas diferentes. Bibliotecários vendem livros encantados raros. Cure aldeões zumbis para melhores preços. Precisam de camas e estações de trabalho!'
    }
};