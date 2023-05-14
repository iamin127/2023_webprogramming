import p01 from './assets/고윤정.png'
import p02 from './assets/나연.png'
import p03 from './assets/다니엘.png'
import p04 from './assets/민지.png'
import p05 from './assets/손예진.png'
import p06 from './assets/송혜교.png'
import p07 from './assets/수지.png'
import p08 from './assets/아이린.png'
import p09 from './assets/전지현.png'
import p10 from './assets/조이.png'
import p11 from './assets/지니.png'
import p12 from './assets/지우.png'
import p13 from './assets/하니.png'
import p14 from './assets/한소희.png'
import p15 from './assets/해린.png'
import p16 from './assets/허윤진.png'
import { useEffect, useState } from 'react'


function Worldcup() {
    const candidate = [
        {name: '고윤정', src: p01},
        {name: '나연', src: p02},
        {name: '다니엘', src: p03},
        {name: '민지', src: p04},
        {name: '손예진', src: p05},
        {name: '송혜교', src: p06},
        {name: '수지', src: p07},
        {name: '아이린', src: p08},
        {name: '전지현', src: p09},
        {name: '조이', src: p10},
        {name: '지니', src: p11},
        {name: '지우', src: p12},
        {name: '하니', src: p13},
        {name: '한소희', src: p14},
        {name: '해린', src: p15},
        {name: '허윤진', src: p16}
    ];

    const [game, setGame] = useState([]);
    const [round, setRound] = useState(0);
    const [nextGame, setNextGame] = useState([]);

    useEffect(() => {
        setGame(candidate.map(c => {
            return {name: c.name, src: c.src, order: Math.random()}
        }).sort((l, r) => {
            return l.order - r.order;
        }));
    }, []);

    useEffect(() => {
        if( game.length > 1 && round + 1 > game.length / 2 ) {
            setGame(nextGame);
            setNextGame([]);
            setRound(0);
        }
    }, [round]);

    if( game.length === 1 ){
        return <div>
            <p>이상형 월드컵 우승</p>
            <img src={game[0].src} /> <p>{game[0].name}</p>
        </div>
    }
    if( game.length === 0 || round + 1 > game.length / 2 ) return <p>로딩중입니다</p>;
    return <div>
        <p>이상형 월드컵 {round + 1} / {game.length / 2} <b>{game.length === 2 ? "결승" : game.length + "강"}</b></p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img src={game[round * 2].src} onClick={() => {
                setNextGame((prev) => prev.concat(game[round * 2]))
                setRound(round => round + 1);
            }} />
            <img src={game[round * 2 + 1].src} onClick={() => {
                setNextGame((prev) => prev.concat(game[round * 2 + 1]))
                setRound(round => round + 1);
            }}/>
        </div>
    </div>;
}

export default Worldcup;