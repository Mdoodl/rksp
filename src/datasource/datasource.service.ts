import { Injectable } from '@nestjs/common';
import { Band } from 'bands/bands.entity';
import { Comment } from 'comments/comments.identity';
import { Member } from 'members/member.identity';

@Injectable()
export class DatasourceService {
  private bands: Band[] = [];

  getBands(): Band[] {
    return this.bands;
  }

    private comments: Comment[] = [];

  getComments(): Comment[] {
    return this.comments;
  }

  private members: Member[] = [];

  getMembers(): Member[] {
    return this.members;
  }
}



