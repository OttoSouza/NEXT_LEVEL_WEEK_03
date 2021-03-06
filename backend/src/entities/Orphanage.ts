import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import OrphanagesImages from "./OrphanagesImages";
@Entity("orphanages")
export default class Orphanage {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @OneToMany(() => OrphanagesImages, (image) => image.orphanage, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "orphanage_id" })
  images: OrphanagesImages[];
}
