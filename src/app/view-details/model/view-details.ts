export class MatchDetails {
    awayTeamId: string;
    awayTeamCode: string;
    awayTeamName: string;
    awayTeamUrl: string;
    awayDisplayScore: string;
    awayDisplayOver: string;
    awayDisplayRunRate: string;
    homeTeamId: string;
    homeTeamCode: string;
    homeTeamName: string;
    homeTeamUrl: string;
    homeDisplayScore: string;
    homeDisplayOver: string;
    homeDisplayRunRate: string;
    isAwayTeamBatting: boolean;
    isHomeTeamBatting: boolean;
    displayMsg: string;
    matchId: string;
    matchRawStatus: string;
    matchScheduledDate: string;
    matchStatus: string;
    manOfTheMatch: string;
    pitchCondition: string;
    seasonId: string;
    seasonName: string;
    status: string;
    strikerId: string;
    strikerName: string;
    nonStrikerId: string;
    nonStrikerName: string;
    testMatchInningResumeDate: string;
    tossMessage: string;
    tournamentCategoryName: string;
    tournamentGender: string;
    tournamentId: string;
    tournamentName: string;
    tournamentType: string;
    type: string;
    firstUmpireName: string;
    secondUmpireName: string;
    thirdUmpireName: string;
    venueName: string;
    venueCityName: string;
    venueCountryName: string;
    weatherHumidity: string;
    weatherTemperature: string;
    weatherText: string;
    weatherWindSpeed: string;
    activeBowler
    nonActiveBowler
    inningsData: any[]=[];

    static fromJson(data: any): MatchDetails {
        const m: MatchDetails = new MatchDetails();
        m['awayTeamId'] = data['awayTeamId'];
        m['awayTeamCode'] = data['awayTeamCode'];
        m['awayTeamName'] = data['awayTeamName'];
        m['awayTeamUrl'] = data['awayTeamUrl'];
        m['awayDisplayRunRate'] = data['awayDisplayRunRate'];
        m['homeTeamId'] = data['homeTeamId'];
        m['homeTeamCode'] = data['homeTeamCode'];
        m['homeTeamName'] = data['homeTeamName'];
        m['homeTeamUrl'] = data['homeTeamUrl'];
        m['homeDisplayRunRate'] = data['homeDisplayRunRate'];
        m['isAwayTeamBatting'] = data['currentBattingTeam']['isAwayTeamBatting'];
        m['isHomeTeamBatting'] = data['currentBattingTeam']['isHomeTeamBatting'];
        m['displayMsg'] = data['displayMessage'];
        m['awayDisplayScore'] = data['displayScoreOver']['awayDisplayScore'];
        m['awayDisplayOver'] = data['displayScoreOver']['awayDisplayOver'];
        m['homeDisplayScore'] = data['displayScoreOver']['homeDisplayScore'];
        m['homeDisplayOver'] = data['displayScoreOver']['homeDisplayOver'];
        m['matchId'] = data['matchId'];
        m['matchRawStatus'] = data['matchRawStatus'];
        m['matchScheduledDate'] = data['matchScheduledDate'];
        m['matchStatus'] = data['matchStatus'];
        m['manOfTheMatch'] = data['manOfTheMatch'];
        m['pitchCondition'] = data['pitchCondition'];
        m['seasonId'] = data['seasonId'];
        m['seasonName'] = data['seasonName'];
        m['status'] = data['status'];
        if(data['strikerAndNonStriker']){
        m['strikerId'] = data['strikerAndNonStriker']['strikerId'];
        m['strikerName'] = data['strikerAndNonStriker']['strikerName'];
        m['nonStrikerId'] = data['strikerAndNonStriker']['nonStrikerId'];
        m['nonStrikerName'] = data['strikerAndNonStriker']['nonStrikerName'];
    }
        m['testMatchInningResumeDate'] = data['testMatchInningResumeDate'];
        m['tossMessage'] = data['tossMessage'];
        m['tournamentCategoryName'] = data['tournamentCategoryName'];
        m['tournamentGender'] = data['tournamentGender'];
        m['tournamentId'] = data['tournamentId'];
        m['tournamentName'] = data['tournamentName'];
        m['tournamentType'] = data['tournamentType'];
        m['type'] = data['type'];
        m['firstUmpireName'] = data['umpireDetails']['firstUmpireName'];
        m['secondUmpireName'] = data['umpireDetails']['secondUmpireName'];
        m['thirdUmpireName'] = data['umpireDetails']['thirdUmpireName'];
        m['venueName'] = data['venue']['name'];
        m['venueCityName'] = data['venue']['cityName'];
        m['venueCountryName'] = data['venue']['countryName'];
        m['weatherHumidity'] = data['weatherData']['humidity'];
        m['weatherTemperature'] = data['weatherData']['temperature'];
        m['weatherText'] = data['weatherData']['weatherText'];
        m['weatherWindSpeed']= data['weatherData']['windSpeed'];
        m['activeBowler'] = {};
        m['nonActiveBowler'] = {};
        m['activeBowler']['id'] = data['currentAndLastBowler']['activeBowler']['id'];
        m['activeBowler']['name'] = data['currentAndLastBowler']['activeBowler']['name'];
        m['activeBowler']['maidens'] = data['currentAndLastBowler']['activeBowler']['M'];
        m['activeBowler']['overs'] = data['currentAndLastBowler']['activeBowler']['O'];
        m['activeBowler']['runs'] = data['currentAndLastBowler']['activeBowler']['R'];
        m['activeBowler']['wickets'] = data['currentAndLastBowler']['activeBowler']['W'];
        m['activeBowler']['econ'] = data['currentAndLastBowler']['activeBowler']['Econ'];
        m['nonActiveBowler']['id'] = data['currentAndLastBowler']['nonActiveBowler']['id'];
        m['nonActiveBowler']['name'] = data['currentAndLastBowler']['nonActiveBowler']['name'];
        m['nonActiveBowler']['maidens'] = data['currentAndLastBowler']['nonActiveBowler']['M'];
        m['nonActiveBowler']['overs'] = data['currentAndLastBowler']['nonActiveBowler']['O'];
        m['nonActiveBowler']['runs'] = data['currentAndLastBowler']['nonActiveBowler']['R'];
        m['nonActiveBowler']['wickets'] = data['currentAndLastBowler']['nonActiveBowler']['W'];
        m['nonActiveBowler']['econ'] = data['currentAndLastBowler']['nonActiveBowler']['Econ'];
       
        for (const innings of data['inningsData']){
            const inning ={};
            // inning['batterName'] = innings['playerName'];
            // inning['dismissalMsg'] = innings['dismissalMsg'];
            // m['inningsData'].push(inning);
            inning['batsman'] = [];
            for (const b of innings ['batsman']){
                const batsmanDetails = {};
                batsmanDetails ['batterName'] = b ['playerName'];
                batsmanDetails ['dismissalMessage'] = b ['dismissalMessage'];
                batsmanDetails ['SR'] = b ['SR'];
                batsmanDetails ['Balls'] = b ['Balls'];
                batsmanDetails ['Runs'] = b ['Runs'];
                batsmanDetails ['fours'] = b ['fours'];
                batsmanDetails ['sixes'] = b ['sixes'];
                batsmanDetails ['battingOrder'] = b ['battingOrder'];
                inning ['batsman'].push (batsmanDetails);
            }
            m ['inningsData'].push (inning);
            console.log('HEllo world',m['inningsData']); 
        }
        return m;
    }
}


export class InningDetails {
    headingDisplay: string;
    battingTeamID: string;
    battingTeamCode: string;
    battingTeamName: string;
    bowlingTeamID: string;
    bowlingTeamCode: string;
    bowlingTeamName: string;
    totalExtras: number;
    byes: number;
    legByes: number;
    noBalls: number;
    wides: number;
    inningNumber: number;
    totalFours: number;
    totalSixes: number;
    runRate: number;
    totalOvers: number;
    totalScore: string;
    battingScoreCard: any[] = [];
    bowlingScoreCard: any[] = [];
    fallOfWickets: any[] = [];
    oversDetails: any[] = [];
    yetToBat: any[] = [];
    allHighlights: any[] = [];
    foursHighlights: any[] = [];
    sixesHighlights: any[] = [];
    wicketsHighlights: any[] = [];

    static fromJson(data: any): InningDetails {
        const i: InningDetails = new InningDetails();
        i['headingDisplay'] = data['battingTeamName'];
        i['battingTeamID'] = data['battingTeamID'];
        i['battingTeamCode'] = data['battingTeamCode'];
        i['battingTeamName'] = data['battingTeamName'];
        i['bowlingTeamID'] = data['bowllingTeamID'];
        i['bowlingTeamName'] = data['bowllingTeamName'];
        i['totalExtras'] = data['extraRuns']['extras'];
        i['byes'] = data['extraRuns']['byes'];
        i['legByes'] = data['extraRuns']['legByes'];
        i['noBalls'] = data['extraRuns']['noBalls'];
        i['wides'] = data['extraRuns']['wides'];
        i['inningNumber'] = data['number'];
        i['totalFours'] = data['fours'];
        i['totalSixes'] = data['sixes'];
        i['runRate'] = data['runRate'];
        i['totalOvers'] = data['totalOvers'];
        i['totalScore'] = data['totalScore'];

        for (const bat of data['batsman']) {
            const batting = {};
            batting['batterName'] = bat['playerName'];
            batting['dismissalMsg'] = bat['dismissalMessage'];
            batting['runs'] = bat['Runs'];
            batting['balls'] = bat['Balls'];
            batting['strikeRate'] = bat['SR'];
            batting['fours'] = bat['fours'];
            batting['sixes'] = bat['sixes'];
            batting['battingOrder'] = bat['battingOrder'];
            batting['isOnStrike'] = bat['onStrike'];
            i['battingScoreCard'].push(batting);
        }
        for (const bowl of data['bowling']) {
            const bowling = {};
            bowling['bowlerName'] = bowl['playerName'];
            bowling['maiden'] = bowl['M'];
            bowling['overs'] = bowl['O'];
            bowling['runs'] = bowl['R'];
            bowling['wickets'] = bowl['W'];
            bowling['econ'] = bowl['Econ'];
            i['bowlingScoreCard'].push(bowling);
        }
        for (const fall of data['fallOfWickets']) {
            const fow = {};
            fow['batterName'] = fall['playerName'];
            fow['dismissalMsg'] = fall['message'];
            fow['atScore'] = fall['atScore'];
            fow['atOver'] = fall['atOver'];
            i['fallOfWickets'].push(fow);
        }
        for (const yet of data['yetToBat']) {
            const ytb = {};
            ytb['batterName'] = yet['playerName'];
            ytb['battingOrder'] = yet['battingOrder'];
            i['yetToBat'].push(ytb);
        }
        
        for (const comm of data['commentry']) {
            const overDet = {};
            overDet['battingStrikerName'] = comm['battingStrikerName'];
            overDet['battingStrikerScoreDisplay'] = comm['battingStrikerScoreDisplay'];
            overDet['battingNonStrikerName'] = comm['battingnonStrikerName'];
            overDet['battingNonStrikerScoreDisplay'] = comm['battingNonStrikerScoreDisplay'];
            overDet['bowlerName'] = comm['bowlerName'];
            overDet['displayScore'] = comm['displayScore'];
            overDet['overNumber'] = comm['overNumber'];
            overDet['runsThisOver'] = comm['runsThisOver'];

            overDet['commentaryDetails'] = [];
            for (const c of comm['commentary']) {
                const commDet = {};
                commDet['ballNo'] = c['ballNo'];
                commDet['bowlerName'] = c['bowlerName'];
                commDet['commentary'] = c['commentary'];
                commDet['strikerName'] = c['strikerName'];
                if (c['type'] === 'BOUNDARY') {
                    commDet['ballEvent'] = 'FOUR' 
                }else {
                    commDet['ballEvent'] = c['type'];
                }
                overDet['commentaryDetails'].push(commDet);
            }

            overDet['overHighlightsDetails'] = [];
            for (const o of comm['overHighlight']) {
                const ovHighDet = {};
                ovHighDet['ballNumber'] = o['ballNumber'];
                ovHighDet['extraRun'] = o['extraRun'];
                ovHighDet['isBoundary'] = o['isBoundary'];
                ovHighDet['isOut'] = o['isOut'];
                ovHighDet['runs'] = o['runs'];
                ovHighDet['scoreDisplay'] = o['scoreDisplay'];
                overDet['overHighlightsDetails'].push(ovHighDet);
            }
            i['oversDetails'].push(overDet);
        }

        for (const a of data['highlightsData']['allHighlights']) {
            const all = {};
            all['ballNumber'] = a['ballNumber'];
            all['commentary'] = a['commentary'];
            all['displayScore'] = a['scoreDisplay'];
            i['allHighlights'].push(all);
        }
        for (const f of data['highlightsData']['fours']) {
            const fours = {};
            fours['ballNumber'] = f['ballNumber'];
            fours['commentary'] = f['commentary'];
            fours['displayScore'] = f['scoreDisplay'];
            i['foursHighlights'].push(fours);
        }
        for (const s of data['highlightsData']['sixes']) {
            const sixes = {};
            sixes['ballNumber'] = s['ballNumber'];
            sixes['commentary'] = s['commentary'];
            sixes['displayScore'] = s['scoreDisplay'];
            i['sixesHighlights'].push(sixes);
        }
        for (const w of data['highlightsData']['wickets']) {
            const wickets = {};
            wickets['ballNumber'] = w['ballNumber'];
            wickets['commentary'] = w['commentary'];
            wickets['displayScore'] = w['scoreDisplay'];
            i['wicketsHighlights'].push(wickets);
        }
        return i;
    }
}