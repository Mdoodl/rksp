import { Band } from 'bands/bands.entity';
import { Comment } from 'comments/comments.identity';
import { Member } from 'members/member.identity';
export declare class DatasourceService {
    private bands;
    getBands(): Band[];
    private comments;
    getComments(): Comment[];
    private members;
    getMembers(): Member[];
}
