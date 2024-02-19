export class Squad {
    playingXI: any[] = [];
    onBench: any[] = [];
}

export class IccRankings{
    rank:number;
    player:string;
    team:string;
    rating:number;
points:number;
    static fromJson(data:any): IccRankings{
        const icc: IccRankings = new IccRankings();
        icc['rank']=data['rank'];
        icc['player']=data['player'];
        icc['team']=data['team'];
        icc['rating']=data['rating'];
        icc['points']=data['points'];
        return icc;
    }
}

export class GameFormats{
    odis:IccRankings[]=[];
    tests:IccRankings[]=[];
    t20s:IccRankings[]=[];
    static fromJson(data:any):GameFormats{
        const g: GameFormats=new GameFormats();
for(const i of data['odis']){
g['odis'].push(IccRankings.fromJson(i));
}
for(const i of data['tests']){
    g['tests'].push(IccRankings.fromJson(i));
    }
    for(const i of data['t20s']){
        g['t20s'].push(IccRankings.fromJson(i));
        }

        return g;
    }
}
