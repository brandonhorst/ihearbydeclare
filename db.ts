import { Declaration, ViewDeclaration } from "./types.ts";
import { ulid } from "jsr:@std/ulid";

function declarationKey(declarationId: string) {
  return ["declaration", declarationId];
}

export default class Db {
  constructor(private kv: Deno.Kv) {}

  public async createDeclaration(declaration: Declaration): Promise<string> {
    const declarationId = ulid();
    const key = declarationKey(declarationId);
    await this.kv.set(key, declaration);
    return declarationId;
  }

  public async getViewDeclaration(
    declarationId: string,
  ): Promise<ViewDeclaration | undefined> {
    const key = declarationKey(declarationId);
    const declaration = await this.kv.get<Declaration>(key);
    console.log("viewing", declaration);

    if (declaration.value == null) {
      return;
    }
    if (declaration.value.publicationDate < new Date()) {
      return {
        isPublished: true,
        ...declaration.value,
      };
    } else {
      return {
        isPublished: false,
        title: declaration.value.title,
        createDate: declaration.value.createDate,
        publicationDate: declaration.value.publicationDate,
      };
    }
  }
}
