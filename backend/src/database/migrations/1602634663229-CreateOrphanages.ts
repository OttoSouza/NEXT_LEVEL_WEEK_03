import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrphanages1602634663229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZAR ALTERAÇOES
    // CRIAR TABELA, CRIAR UM NOVO CAMPO DA TABELA, DELETAR ALGUM COMPO, FAZER UMA LIGAÇAO COM OUTRA TABELA
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text",
          },
          {
            name: "opening_hours",
            type: "text",
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DEFAZER TUDO METADO UP
    await queryRunner.dropTable("orphanages");
  }
}
