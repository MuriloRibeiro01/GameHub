export type Servidor = {
    id: string,
    nome: string,
    jogo: string,
    imagem: any,
};

export const SERVIDORES: Servidor[] = [
    {id: 'cs', nome: 'Rumo ao topo', jogo: 'Counter-Strike', imagem: require('../../public/GameHubImages/cs.png')},
    {id: 'apex', nome: 'Rumo ao topo', jogo: 'Apex-Legends', imagem: require('../../public/GameHubImages/apex.png')},
    {id: 'reddead', nome: 'Yeah, boy', jogo: 'Red Dead Redemption 2', imagem: require('../../public/GameHubImages/reddead.png')},
    {id: 'valorant', nome: 'Valorosos', jogo: 'Valorant', imagem: require('../../public/GameHubImages/valorant.png')},
    {id: 'gta', nome: 'Rolezão monstro', jogo: 'GTAV', imagem: require('../../public/GameHubImages/gta.png')},
    {id: 'mine', nome: 'Rumo ao topo', jogo: 'Minecraft', imagem: require('../../public/GameHubImages/mine.png')},
    {id: 'battlefield', nome: 'Rumo ao topo', jogo: 'Battlefield', imagem: require('../../public/GameHubImages/battlefield.png')},
];
