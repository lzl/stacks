import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column('text')
  content: string
}
