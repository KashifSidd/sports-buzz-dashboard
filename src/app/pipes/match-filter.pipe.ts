import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'matchFilter'
})
export class MatchFilterPipe implements PipeTransform {

  transform(matches: any[], args: string): any {
    if (matches) {
      return matches.filter(match =>  {
        if (match.status === 'live' || match.status === 'delayed' || match.status === 'interrupted') {
          return match;
        }
        else if (match.tournamentType === 'test') {
          return moment(match.testMatchInningResumeDate).format("YYYY-MM-DD") === args;
        }else {
          return moment(match.matchScheduledDate).format("YYYY-MM-DD") === args;
        }
      })
    }
  }

}
