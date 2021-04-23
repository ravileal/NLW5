import { Entity, Column, UpdateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("user")
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @UpdateDateColumn()
  created_at: Date;

  constructor(){
    if (!this.id)
      this.id = uuid()
  }

}

export { User }