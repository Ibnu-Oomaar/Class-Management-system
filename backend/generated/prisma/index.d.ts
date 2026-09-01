
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model ClassLeader
 * 
 */
export type ClassLeader = $Result.DefaultSelection<Prisma.$ClassLeaderPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model DisciplineCase
 * 
 */
export type DisciplineCase = $Result.DefaultSelection<Prisma.$DisciplineCasePayload>
/**
 * Model ClassImpact
 * 
 */
export type ClassImpact = $Result.DefaultSelection<Prisma.$ClassImpactPayload>
/**
 * Model Competition
 * 
 */
export type Competition = $Result.DefaultSelection<Prisma.$CompetitionPayload>
/**
 * Model CompetitionParticipant
 * 
 */
export type CompetitionParticipant = $Result.DefaultSelection<Prisma.$CompetitionParticipantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StudentStatus: {
  active: 'active',
  suspended: 'suspended',
  rejected: 'rejected',
  transferred: 'transferred'
};

export type StudentStatus = (typeof StudentStatus)[keyof typeof StudentStatus]


export const Role: {
  main_monitor: 'main_monitor',
  assistant_monitor: 'assistant_monitor',
  discipline_leader: 'discipline_leader',
  sports_leader: 'sports_leader',
  education_leader: 'education_leader',
  student: 'student'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DisciplineSeverity: {
  low: 'low',
  medium: 'medium',
  high: 'high',
  critical: 'critical'
};

export type DisciplineSeverity = (typeof DisciplineSeverity)[keyof typeof DisciplineSeverity]


export const DisciplineAction: {
  warning: 'warning',
  recorded: 'recorded',
  referred_to_admin: 'referred_to_admin',
  class_rejection: 'class_rejection'
};

export type DisciplineAction = (typeof DisciplineAction)[keyof typeof DisciplineAction]


export const ImpactType: {
  positive: 'positive',
  negative: 'negative'
};

export type ImpactType = (typeof ImpactType)[keyof typeof ImpactType]


export const AchievementType: {
  academic: 'academic',
  leadership: 'leadership',
  sports: 'sports',
  discipline: 'discipline',
  community: 'community'
};

export type AchievementType = (typeof AchievementType)[keyof typeof AchievementType]


export const CompetitionType: {
  football: 'football',
  quiz: 'quiz',
  academic: 'academic'
};

export type CompetitionType = (typeof CompetitionType)[keyof typeof CompetitionType]

}

export type StudentStatus = $Enums.StudentStatus

export const StudentStatus: typeof $Enums.StudentStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DisciplineSeverity = $Enums.DisciplineSeverity

export const DisciplineSeverity: typeof $Enums.DisciplineSeverity

export type DisciplineAction = $Enums.DisciplineAction

export const DisciplineAction: typeof $Enums.DisciplineAction

export type ImpactType = $Enums.ImpactType

export const ImpactType: typeof $Enums.ImpactType

export type AchievementType = $Enums.AchievementType

export const AchievementType: typeof $Enums.AchievementType

export type CompetitionType = $Enums.CompetitionType

export const CompetitionType: typeof $Enums.CompetitionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classLeader`: Exposes CRUD operations for the **ClassLeader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassLeaders
    * const classLeaders = await prisma.classLeader.findMany()
    * ```
    */
  get classLeader(): Prisma.ClassLeaderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplineCase`: Exposes CRUD operations for the **DisciplineCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisciplineCases
    * const disciplineCases = await prisma.disciplineCase.findMany()
    * ```
    */
  get disciplineCase(): Prisma.DisciplineCaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classImpact`: Exposes CRUD operations for the **ClassImpact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassImpacts
    * const classImpacts = await prisma.classImpact.findMany()
    * ```
    */
  get classImpact(): Prisma.ClassImpactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionParticipant`: Exposes CRUD operations for the **CompetitionParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionParticipants
    * const competitionParticipants = await prisma.competitionParticipant.findMany()
    * ```
    */
  get competitionParticipant(): Prisma.CompetitionParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    ClassLeader: 'ClassLeader',
    Achievement: 'Achievement',
    DisciplineCase: 'DisciplineCase',
    ClassImpact: 'ClassImpact',
    Competition: 'Competition',
    CompetitionParticipant: 'CompetitionParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "classLeader" | "achievement" | "disciplineCase" | "classImpact" | "competition" | "competitionParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      ClassLeader: {
        payload: Prisma.$ClassLeaderPayload<ExtArgs>
        fields: Prisma.ClassLeaderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassLeaderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassLeaderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>
          }
          findFirst: {
            args: Prisma.ClassLeaderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassLeaderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>
          }
          findMany: {
            args: Prisma.ClassLeaderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>[]
          }
          create: {
            args: Prisma.ClassLeaderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>
          }
          createMany: {
            args: Prisma.ClassLeaderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassLeaderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>[]
          }
          delete: {
            args: Prisma.ClassLeaderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>
          }
          update: {
            args: Prisma.ClassLeaderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>
          }
          deleteMany: {
            args: Prisma.ClassLeaderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassLeaderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassLeaderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>[]
          }
          upsert: {
            args: Prisma.ClassLeaderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassLeaderPayload>
          }
          aggregate: {
            args: Prisma.ClassLeaderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassLeader>
          }
          groupBy: {
            args: Prisma.ClassLeaderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassLeaderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassLeaderCountArgs<ExtArgs>
            result: $Utils.Optional<ClassLeaderCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      DisciplineCase: {
        payload: Prisma.$DisciplineCasePayload<ExtArgs>
        fields: Prisma.DisciplineCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>
          }
          findFirst: {
            args: Prisma.DisciplineCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>
          }
          findMany: {
            args: Prisma.DisciplineCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>[]
          }
          create: {
            args: Prisma.DisciplineCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>
          }
          createMany: {
            args: Prisma.DisciplineCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>[]
          }
          delete: {
            args: Prisma.DisciplineCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>
          }
          update: {
            args: Prisma.DisciplineCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>
          }
          deleteMany: {
            args: Prisma.DisciplineCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineCaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>[]
          }
          upsert: {
            args: Prisma.DisciplineCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineCasePayload>
          }
          aggregate: {
            args: Prisma.DisciplineCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplineCase>
          }
          groupBy: {
            args: Prisma.DisciplineCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineCaseCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineCaseCountAggregateOutputType> | number
          }
        }
      }
      ClassImpact: {
        payload: Prisma.$ClassImpactPayload<ExtArgs>
        fields: Prisma.ClassImpactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassImpactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassImpactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>
          }
          findFirst: {
            args: Prisma.ClassImpactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassImpactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>
          }
          findMany: {
            args: Prisma.ClassImpactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>[]
          }
          create: {
            args: Prisma.ClassImpactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>
          }
          createMany: {
            args: Prisma.ClassImpactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassImpactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>[]
          }
          delete: {
            args: Prisma.ClassImpactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>
          }
          update: {
            args: Prisma.ClassImpactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>
          }
          deleteMany: {
            args: Prisma.ClassImpactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassImpactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassImpactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>[]
          }
          upsert: {
            args: Prisma.ClassImpactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassImpactPayload>
          }
          aggregate: {
            args: Prisma.ClassImpactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassImpact>
          }
          groupBy: {
            args: Prisma.ClassImpactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassImpactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassImpactCountArgs<ExtArgs>
            result: $Utils.Optional<ClassImpactCountAggregateOutputType> | number
          }
        }
      }
      Competition: {
        payload: Prisma.$CompetitionPayload<ExtArgs>
        fields: Prisma.CompetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findMany: {
            args: Prisma.CompetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          create: {
            args: Prisma.CompetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          createMany: {
            args: Prisma.CompetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          delete: {
            args: Prisma.CompetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          update: {
            args: Prisma.CompetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.CompetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      CompetitionParticipant: {
        payload: Prisma.$CompetitionParticipantPayload<ExtArgs>
        fields: Prisma.CompetitionParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          findFirst: {
            args: Prisma.CompetitionParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          findMany: {
            args: Prisma.CompetitionParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>[]
          }
          create: {
            args: Prisma.CompetitionParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          createMany: {
            args: Prisma.CompetitionParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>[]
          }
          delete: {
            args: Prisma.CompetitionParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          update: {
            args: Prisma.CompetitionParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          aggregate: {
            args: Prisma.CompetitionParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionParticipant>
          }
          groupBy: {
            args: Prisma.CompetitionParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    classLeader?: ClassLeaderOmit
    achievement?: AchievementOmit
    disciplineCase?: DisciplineCaseOmit
    classImpact?: ClassImpactOmit
    competition?: CompetitionOmit
    competitionParticipant?: CompetitionParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    achievements: number
    discipline_cases: number
    class_impacts: number
    competitions: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | StudentCountOutputTypeCountAchievementsArgs
    discipline_cases?: boolean | StudentCountOutputTypeCountDiscipline_casesArgs
    class_impacts?: boolean | StudentCountOutputTypeCountClass_impactsArgs
    competitions?: boolean | StudentCountOutputTypeCountCompetitionsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountDiscipline_casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineCaseWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountClass_impactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassImpactWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCompetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionParticipantWhereInput
  }


  /**
   * Count Type ClassLeaderCountOutputType
   */

  export type ClassLeaderCountOutputType = {
    achievements: number
    discipline_cases: number
    class_impacts: number
  }

  export type ClassLeaderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | ClassLeaderCountOutputTypeCountAchievementsArgs
    discipline_cases?: boolean | ClassLeaderCountOutputTypeCountDiscipline_casesArgs
    class_impacts?: boolean | ClassLeaderCountOutputTypeCountClass_impactsArgs
  }

  // Custom InputTypes
  /**
   * ClassLeaderCountOutputType without action
   */
  export type ClassLeaderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeaderCountOutputType
     */
    select?: ClassLeaderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassLeaderCountOutputType without action
   */
  export type ClassLeaderCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
  }

  /**
   * ClassLeaderCountOutputType without action
   */
  export type ClassLeaderCountOutputTypeCountDiscipline_casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineCaseWhereInput
  }

  /**
   * ClassLeaderCountOutputType without action
   */
  export type ClassLeaderCountOutputTypeCountClass_impactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassImpactWhereInput
  }


  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    participants: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | CompetitionCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    student_code: string | null
    role: $Enums.Role | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    phone: string | null
    status: $Enums.StudentStatus | null
    registered_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    student_code: string | null
    role: $Enums.Role | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    phone: string | null
    status: $Enums.StudentStatus | null
    registered_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    student_code: number
    role: number
    first_name: number
    middle_name: number
    last_name: number
    phone: number
    status: number
    registered_at: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    student_code?: true
    role?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    phone?: true
    status?: true
    registered_at?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    student_code?: true
    role?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    phone?: true
    status?: true
    registered_at?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    student_code?: true
    role?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    phone?: true
    status?: true
    registered_at?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    student_code: string
    role: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status: $Enums.StudentStatus
    registered_at: Date
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_code?: boolean
    role?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    phone?: boolean
    status?: boolean
    registered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    achievements?: boolean | Student$achievementsArgs<ExtArgs>
    discipline_cases?: boolean | Student$discipline_casesArgs<ExtArgs>
    class_impacts?: boolean | Student$class_impactsArgs<ExtArgs>
    competitions?: boolean | Student$competitionsArgs<ExtArgs>
    class_leaders?: boolean | Student$class_leadersArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_code?: boolean
    role?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    phone?: boolean
    status?: boolean
    registered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_code?: boolean
    role?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    phone?: boolean
    status?: boolean
    registered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    student_code?: boolean
    role?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    phone?: boolean
    status?: boolean
    registered_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_code" | "role" | "first_name" | "middle_name" | "last_name" | "phone" | "status" | "registered_at" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievements?: boolean | Student$achievementsArgs<ExtArgs>
    discipline_cases?: boolean | Student$discipline_casesArgs<ExtArgs>
    class_impacts?: boolean | Student$class_impactsArgs<ExtArgs>
    competitions?: boolean | Student$competitionsArgs<ExtArgs>
    class_leaders?: boolean | Student$class_leadersArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      discipline_cases: Prisma.$DisciplineCasePayload<ExtArgs>[]
      class_impacts: Prisma.$ClassImpactPayload<ExtArgs>[]
      competitions: Prisma.$CompetitionParticipantPayload<ExtArgs>[]
      class_leaders: Prisma.$ClassLeaderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_code: string
      role: $Enums.Role
      first_name: string
      middle_name: string
      last_name: string
      phone: string
      status: $Enums.StudentStatus
      registered_at: Date
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievements<T extends Student$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, Student$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discipline_cases<T extends Student$discipline_casesArgs<ExtArgs> = {}>(args?: Subset<T, Student$discipline_casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    class_impacts<T extends Student$class_impactsArgs<ExtArgs> = {}>(args?: Subset<T, Student$class_impactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competitions<T extends Student$competitionsArgs<ExtArgs> = {}>(args?: Subset<T, Student$competitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    class_leaders<T extends Student$class_leadersArgs<ExtArgs> = {}>(args?: Subset<T, Student$class_leadersArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly student_code: FieldRef<"Student", 'String'>
    readonly role: FieldRef<"Student", 'Role'>
    readonly first_name: FieldRef<"Student", 'String'>
    readonly middle_name: FieldRef<"Student", 'String'>
    readonly last_name: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'StudentStatus'>
    readonly registered_at: FieldRef<"Student", 'DateTime'>
    readonly created_at: FieldRef<"Student", 'DateTime'>
    readonly updated_at: FieldRef<"Student", 'DateTime'>
    readonly deleted_at: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.achievements
   */
  export type Student$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Student.discipline_cases
   */
  export type Student$discipline_casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    where?: DisciplineCaseWhereInput
    orderBy?: DisciplineCaseOrderByWithRelationInput | DisciplineCaseOrderByWithRelationInput[]
    cursor?: DisciplineCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplineCaseScalarFieldEnum | DisciplineCaseScalarFieldEnum[]
  }

  /**
   * Student.class_impacts
   */
  export type Student$class_impactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    where?: ClassImpactWhereInput
    orderBy?: ClassImpactOrderByWithRelationInput | ClassImpactOrderByWithRelationInput[]
    cursor?: ClassImpactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassImpactScalarFieldEnum | ClassImpactScalarFieldEnum[]
  }

  /**
   * Student.competitions
   */
  export type Student$competitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    where?: CompetitionParticipantWhereInput
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    cursor?: CompetitionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * Student.class_leaders
   */
  export type Student$class_leadersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    where?: ClassLeaderWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model ClassLeader
   */

  export type AggregateClassLeader = {
    _count: ClassLeaderCountAggregateOutputType | null
    _avg: ClassLeaderAvgAggregateOutputType | null
    _sum: ClassLeaderSumAggregateOutputType | null
    _min: ClassLeaderMinAggregateOutputType | null
    _max: ClassLeaderMaxAggregateOutputType | null
  }

  export type ClassLeaderAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
  }

  export type ClassLeaderSumAggregateOutputType = {
    id: number | null
    student_id: number | null
  }

  export type ClassLeaderMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClassLeaderMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClassLeaderCountAggregateOutputType = {
    id: number
    student_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ClassLeaderAvgAggregateInputType = {
    id?: true
    student_id?: true
  }

  export type ClassLeaderSumAggregateInputType = {
    id?: true
    student_id?: true
  }

  export type ClassLeaderMinAggregateInputType = {
    id?: true
    student_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClassLeaderMaxAggregateInputType = {
    id?: true
    student_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClassLeaderCountAggregateInputType = {
    id?: true
    student_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ClassLeaderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassLeader to aggregate.
     */
    where?: ClassLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLeaders to fetch.
     */
    orderBy?: ClassLeaderOrderByWithRelationInput | ClassLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassLeaders
    **/
    _count?: true | ClassLeaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassLeaderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassLeaderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassLeaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassLeaderMaxAggregateInputType
  }

  export type GetClassLeaderAggregateType<T extends ClassLeaderAggregateArgs> = {
        [P in keyof T & keyof AggregateClassLeader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassLeader[P]>
      : GetScalarType<T[P], AggregateClassLeader[P]>
  }




  export type ClassLeaderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassLeaderWhereInput
    orderBy?: ClassLeaderOrderByWithAggregationInput | ClassLeaderOrderByWithAggregationInput[]
    by: ClassLeaderScalarFieldEnum[] | ClassLeaderScalarFieldEnum
    having?: ClassLeaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassLeaderCountAggregateInputType | true
    _avg?: ClassLeaderAvgAggregateInputType
    _sum?: ClassLeaderSumAggregateInputType
    _min?: ClassLeaderMinAggregateInputType
    _max?: ClassLeaderMaxAggregateInputType
  }

  export type ClassLeaderGroupByOutputType = {
    id: number
    student_id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ClassLeaderCountAggregateOutputType | null
    _avg: ClassLeaderAvgAggregateOutputType | null
    _sum: ClassLeaderSumAggregateOutputType | null
    _min: ClassLeaderMinAggregateOutputType | null
    _max: ClassLeaderMaxAggregateOutputType | null
  }

  type GetClassLeaderGroupByPayload<T extends ClassLeaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassLeaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassLeaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassLeaderGroupByOutputType[P]>
            : GetScalarType<T[P], ClassLeaderGroupByOutputType[P]>
        }
      >
    >


  export type ClassLeaderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    achievements?: boolean | ClassLeader$achievementsArgs<ExtArgs>
    discipline_cases?: boolean | ClassLeader$discipline_casesArgs<ExtArgs>
    class_impacts?: boolean | ClassLeader$class_impactsArgs<ExtArgs>
    _count?: boolean | ClassLeaderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classLeader"]>

  export type ClassLeaderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classLeader"]>

  export type ClassLeaderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classLeader"]>

  export type ClassLeaderSelectScalar = {
    id?: boolean
    student_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ClassLeaderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["classLeader"]>
  export type ClassLeaderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    achievements?: boolean | ClassLeader$achievementsArgs<ExtArgs>
    discipline_cases?: boolean | ClassLeader$discipline_casesArgs<ExtArgs>
    class_impacts?: boolean | ClassLeader$class_impactsArgs<ExtArgs>
    _count?: boolean | ClassLeaderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassLeaderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ClassLeaderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ClassLeaderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassLeader"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      achievements: Prisma.$AchievementPayload<ExtArgs>[]
      discipline_cases: Prisma.$DisciplineCasePayload<ExtArgs>[]
      class_impacts: Prisma.$ClassImpactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["classLeader"]>
    composites: {}
  }

  type ClassLeaderGetPayload<S extends boolean | null | undefined | ClassLeaderDefaultArgs> = $Result.GetResult<Prisma.$ClassLeaderPayload, S>

  type ClassLeaderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassLeaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassLeaderCountAggregateInputType | true
    }

  export interface ClassLeaderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassLeader'], meta: { name: 'ClassLeader' } }
    /**
     * Find zero or one ClassLeader that matches the filter.
     * @param {ClassLeaderFindUniqueArgs} args - Arguments to find a ClassLeader
     * @example
     * // Get one ClassLeader
     * const classLeader = await prisma.classLeader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassLeaderFindUniqueArgs>(args: SelectSubset<T, ClassLeaderFindUniqueArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassLeader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassLeaderFindUniqueOrThrowArgs} args - Arguments to find a ClassLeader
     * @example
     * // Get one ClassLeader
     * const classLeader = await prisma.classLeader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassLeaderFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassLeaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassLeader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLeaderFindFirstArgs} args - Arguments to find a ClassLeader
     * @example
     * // Get one ClassLeader
     * const classLeader = await prisma.classLeader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassLeaderFindFirstArgs>(args?: SelectSubset<T, ClassLeaderFindFirstArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassLeader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLeaderFindFirstOrThrowArgs} args - Arguments to find a ClassLeader
     * @example
     * // Get one ClassLeader
     * const classLeader = await prisma.classLeader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassLeaderFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassLeaderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassLeaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLeaderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassLeaders
     * const classLeaders = await prisma.classLeader.findMany()
     * 
     * // Get first 10 ClassLeaders
     * const classLeaders = await prisma.classLeader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classLeaderWithIdOnly = await prisma.classLeader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassLeaderFindManyArgs>(args?: SelectSubset<T, ClassLeaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassLeader.
     * @param {ClassLeaderCreateArgs} args - Arguments to create a ClassLeader.
     * @example
     * // Create one ClassLeader
     * const ClassLeader = await prisma.classLeader.create({
     *   data: {
     *     // ... data to create a ClassLeader
     *   }
     * })
     * 
     */
    create<T extends ClassLeaderCreateArgs>(args: SelectSubset<T, ClassLeaderCreateArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassLeaders.
     * @param {ClassLeaderCreateManyArgs} args - Arguments to create many ClassLeaders.
     * @example
     * // Create many ClassLeaders
     * const classLeader = await prisma.classLeader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassLeaderCreateManyArgs>(args?: SelectSubset<T, ClassLeaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassLeaders and returns the data saved in the database.
     * @param {ClassLeaderCreateManyAndReturnArgs} args - Arguments to create many ClassLeaders.
     * @example
     * // Create many ClassLeaders
     * const classLeader = await prisma.classLeader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassLeaders and only return the `id`
     * const classLeaderWithIdOnly = await prisma.classLeader.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassLeaderCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassLeaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassLeader.
     * @param {ClassLeaderDeleteArgs} args - Arguments to delete one ClassLeader.
     * @example
     * // Delete one ClassLeader
     * const ClassLeader = await prisma.classLeader.delete({
     *   where: {
     *     // ... filter to delete one ClassLeader
     *   }
     * })
     * 
     */
    delete<T extends ClassLeaderDeleteArgs>(args: SelectSubset<T, ClassLeaderDeleteArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassLeader.
     * @param {ClassLeaderUpdateArgs} args - Arguments to update one ClassLeader.
     * @example
     * // Update one ClassLeader
     * const classLeader = await prisma.classLeader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassLeaderUpdateArgs>(args: SelectSubset<T, ClassLeaderUpdateArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassLeaders.
     * @param {ClassLeaderDeleteManyArgs} args - Arguments to filter ClassLeaders to delete.
     * @example
     * // Delete a few ClassLeaders
     * const { count } = await prisma.classLeader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassLeaderDeleteManyArgs>(args?: SelectSubset<T, ClassLeaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassLeaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLeaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassLeaders
     * const classLeader = await prisma.classLeader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassLeaderUpdateManyArgs>(args: SelectSubset<T, ClassLeaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassLeaders and returns the data updated in the database.
     * @param {ClassLeaderUpdateManyAndReturnArgs} args - Arguments to update many ClassLeaders.
     * @example
     * // Update many ClassLeaders
     * const classLeader = await prisma.classLeader.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassLeaders and only return the `id`
     * const classLeaderWithIdOnly = await prisma.classLeader.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassLeaderUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassLeaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassLeader.
     * @param {ClassLeaderUpsertArgs} args - Arguments to update or create a ClassLeader.
     * @example
     * // Update or create a ClassLeader
     * const classLeader = await prisma.classLeader.upsert({
     *   create: {
     *     // ... data to create a ClassLeader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassLeader we want to update
     *   }
     * })
     */
    upsert<T extends ClassLeaderUpsertArgs>(args: SelectSubset<T, ClassLeaderUpsertArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassLeaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLeaderCountArgs} args - Arguments to filter ClassLeaders to count.
     * @example
     * // Count the number of ClassLeaders
     * const count = await prisma.classLeader.count({
     *   where: {
     *     // ... the filter for the ClassLeaders we want to count
     *   }
     * })
    **/
    count<T extends ClassLeaderCountArgs>(
      args?: Subset<T, ClassLeaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassLeaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassLeader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLeaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassLeaderAggregateArgs>(args: Subset<T, ClassLeaderAggregateArgs>): Prisma.PrismaPromise<GetClassLeaderAggregateType<T>>

    /**
     * Group by ClassLeader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassLeaderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassLeaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassLeaderGroupByArgs['orderBy'] }
        : { orderBy?: ClassLeaderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassLeaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassLeaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassLeader model
   */
  readonly fields: ClassLeaderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassLeader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassLeaderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievements<T extends ClassLeader$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, ClassLeader$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discipline_cases<T extends ClassLeader$discipline_casesArgs<ExtArgs> = {}>(args?: Subset<T, ClassLeader$discipline_casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    class_impacts<T extends ClassLeader$class_impactsArgs<ExtArgs> = {}>(args?: Subset<T, ClassLeader$class_impactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassLeader model
   */
  interface ClassLeaderFieldRefs {
    readonly id: FieldRef<"ClassLeader", 'Int'>
    readonly student_id: FieldRef<"ClassLeader", 'Int'>
    readonly created_at: FieldRef<"ClassLeader", 'DateTime'>
    readonly updated_at: FieldRef<"ClassLeader", 'DateTime'>
    readonly deleted_at: FieldRef<"ClassLeader", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassLeader findUnique
   */
  export type ClassLeaderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * Filter, which ClassLeader to fetch.
     */
    where: ClassLeaderWhereUniqueInput
  }

  /**
   * ClassLeader findUniqueOrThrow
   */
  export type ClassLeaderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * Filter, which ClassLeader to fetch.
     */
    where: ClassLeaderWhereUniqueInput
  }

  /**
   * ClassLeader findFirst
   */
  export type ClassLeaderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * Filter, which ClassLeader to fetch.
     */
    where?: ClassLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLeaders to fetch.
     */
    orderBy?: ClassLeaderOrderByWithRelationInput | ClassLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassLeaders.
     */
    cursor?: ClassLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassLeaders.
     */
    distinct?: ClassLeaderScalarFieldEnum | ClassLeaderScalarFieldEnum[]
  }

  /**
   * ClassLeader findFirstOrThrow
   */
  export type ClassLeaderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * Filter, which ClassLeader to fetch.
     */
    where?: ClassLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLeaders to fetch.
     */
    orderBy?: ClassLeaderOrderByWithRelationInput | ClassLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassLeaders.
     */
    cursor?: ClassLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassLeaders.
     */
    distinct?: ClassLeaderScalarFieldEnum | ClassLeaderScalarFieldEnum[]
  }

  /**
   * ClassLeader findMany
   */
  export type ClassLeaderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * Filter, which ClassLeaders to fetch.
     */
    where?: ClassLeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassLeaders to fetch.
     */
    orderBy?: ClassLeaderOrderByWithRelationInput | ClassLeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassLeaders.
     */
    cursor?: ClassLeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassLeaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassLeaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassLeaders.
     */
    distinct?: ClassLeaderScalarFieldEnum | ClassLeaderScalarFieldEnum[]
  }

  /**
   * ClassLeader create
   */
  export type ClassLeaderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassLeader.
     */
    data: XOR<ClassLeaderCreateInput, ClassLeaderUncheckedCreateInput>
  }

  /**
   * ClassLeader createMany
   */
  export type ClassLeaderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassLeaders.
     */
    data: ClassLeaderCreateManyInput | ClassLeaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassLeader createManyAndReturn
   */
  export type ClassLeaderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * The data used to create many ClassLeaders.
     */
    data: ClassLeaderCreateManyInput | ClassLeaderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassLeader update
   */
  export type ClassLeaderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassLeader.
     */
    data: XOR<ClassLeaderUpdateInput, ClassLeaderUncheckedUpdateInput>
    /**
     * Choose, which ClassLeader to update.
     */
    where: ClassLeaderWhereUniqueInput
  }

  /**
   * ClassLeader updateMany
   */
  export type ClassLeaderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassLeaders.
     */
    data: XOR<ClassLeaderUpdateManyMutationInput, ClassLeaderUncheckedUpdateManyInput>
    /**
     * Filter which ClassLeaders to update
     */
    where?: ClassLeaderWhereInput
    /**
     * Limit how many ClassLeaders to update.
     */
    limit?: number
  }

  /**
   * ClassLeader updateManyAndReturn
   */
  export type ClassLeaderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * The data used to update ClassLeaders.
     */
    data: XOR<ClassLeaderUpdateManyMutationInput, ClassLeaderUncheckedUpdateManyInput>
    /**
     * Filter which ClassLeaders to update
     */
    where?: ClassLeaderWhereInput
    /**
     * Limit how many ClassLeaders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassLeader upsert
   */
  export type ClassLeaderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassLeader to update in case it exists.
     */
    where: ClassLeaderWhereUniqueInput
    /**
     * In case the ClassLeader found by the `where` argument doesn't exist, create a new ClassLeader with this data.
     */
    create: XOR<ClassLeaderCreateInput, ClassLeaderUncheckedCreateInput>
    /**
     * In case the ClassLeader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassLeaderUpdateInput, ClassLeaderUncheckedUpdateInput>
  }

  /**
   * ClassLeader delete
   */
  export type ClassLeaderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
    /**
     * Filter which ClassLeader to delete.
     */
    where: ClassLeaderWhereUniqueInput
  }

  /**
   * ClassLeader deleteMany
   */
  export type ClassLeaderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassLeaders to delete
     */
    where?: ClassLeaderWhereInput
    /**
     * Limit how many ClassLeaders to delete.
     */
    limit?: number
  }

  /**
   * ClassLeader.achievements
   */
  export type ClassLeader$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    cursor?: AchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * ClassLeader.discipline_cases
   */
  export type ClassLeader$discipline_casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    where?: DisciplineCaseWhereInput
    orderBy?: DisciplineCaseOrderByWithRelationInput | DisciplineCaseOrderByWithRelationInput[]
    cursor?: DisciplineCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplineCaseScalarFieldEnum | DisciplineCaseScalarFieldEnum[]
  }

  /**
   * ClassLeader.class_impacts
   */
  export type ClassLeader$class_impactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    where?: ClassImpactWhereInput
    orderBy?: ClassImpactOrderByWithRelationInput | ClassImpactOrderByWithRelationInput[]
    cursor?: ClassImpactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassImpactScalarFieldEnum | ClassImpactScalarFieldEnum[]
  }

  /**
   * ClassLeader without action
   */
  export type ClassLeaderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassLeader
     */
    select?: ClassLeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassLeader
     */
    omit?: ClassLeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassLeaderInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    id: number | null
    points: number | null
    student_id: number | null
    registered_by_id: number | null
  }

  export type AchievementSumAggregateOutputType = {
    id: number | null
    points: number | null
    student_id: number | null
    registered_by_id: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.AchievementType | null
    points: number | null
    achieved_at: Date | null
    student_id: number | null
    registered_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.AchievementType | null
    points: number | null
    achieved_at: Date | null
    student_id: number | null
    registered_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    points: number
    achieved_at: number
    student_id: number
    registered_by_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    id?: true
    points?: true
    student_id?: true
    registered_by_id?: true
  }

  export type AchievementSumAggregateInputType = {
    id?: true
    points?: true
    student_id?: true
    registered_by_id?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    points?: true
    achieved_at?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    points?: true
    achieved_at?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    points?: true
    achieved_at?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: number
    title: string
    description: string | null
    type: $Enums.AchievementType
    points: number
    achieved_at: Date
    student_id: number
    registered_by_id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    achieved_at?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    achieved_at?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    achieved_at?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    achieved_at?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "points" | "achieved_at" | "student_id" | "registered_by_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      registered_by: Prisma.$ClassLeaderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      type: $Enums.AchievementType
      points: number
      achieved_at: Date
      student_id: number
      registered_by_id: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registered_by<T extends ClassLeaderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassLeaderDefaultArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'Int'>
    readonly title: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly type: FieldRef<"Achievement", 'AchievementType'>
    readonly points: FieldRef<"Achievement", 'Int'>
    readonly achieved_at: FieldRef<"Achievement", 'DateTime'>
    readonly student_id: FieldRef<"Achievement", 'Int'>
    readonly registered_by_id: FieldRef<"Achievement", 'Int'>
    readonly created_at: FieldRef<"Achievement", 'DateTime'>
    readonly updated_at: FieldRef<"Achievement", 'DateTime'>
    readonly deleted_at: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model DisciplineCase
   */

  export type AggregateDisciplineCase = {
    _count: DisciplineCaseCountAggregateOutputType | null
    _avg: DisciplineCaseAvgAggregateOutputType | null
    _sum: DisciplineCaseSumAggregateOutputType | null
    _min: DisciplineCaseMinAggregateOutputType | null
    _max: DisciplineCaseMaxAggregateOutputType | null
  }

  export type DisciplineCaseAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    registered_by_id: number | null
  }

  export type DisciplineCaseSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    registered_by_id: number | null
  }

  export type DisciplineCaseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    severity: $Enums.DisciplineSeverity | null
    action: $Enums.DisciplineAction | null
    incident_date: Date | null
    student_id: number | null
    registered_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DisciplineCaseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    severity: $Enums.DisciplineSeverity | null
    action: $Enums.DisciplineAction | null
    incident_date: Date | null
    student_id: number | null
    registered_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type DisciplineCaseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    severity: number
    action: number
    incident_date: number
    student_id: number
    registered_by_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type DisciplineCaseAvgAggregateInputType = {
    id?: true
    student_id?: true
    registered_by_id?: true
  }

  export type DisciplineCaseSumAggregateInputType = {
    id?: true
    student_id?: true
    registered_by_id?: true
  }

  export type DisciplineCaseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    severity?: true
    action?: true
    incident_date?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DisciplineCaseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    severity?: true
    action?: true
    incident_date?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type DisciplineCaseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    severity?: true
    action?: true
    incident_date?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type DisciplineCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineCase to aggregate.
     */
    where?: DisciplineCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCases to fetch.
     */
    orderBy?: DisciplineCaseOrderByWithRelationInput | DisciplineCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisciplineCases
    **/
    _count?: true | DisciplineCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplineCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplineCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineCaseMaxAggregateInputType
  }

  export type GetDisciplineCaseAggregateType<T extends DisciplineCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplineCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplineCase[P]>
      : GetScalarType<T[P], AggregateDisciplineCase[P]>
  }




  export type DisciplineCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineCaseWhereInput
    orderBy?: DisciplineCaseOrderByWithAggregationInput | DisciplineCaseOrderByWithAggregationInput[]
    by: DisciplineCaseScalarFieldEnum[] | DisciplineCaseScalarFieldEnum
    having?: DisciplineCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineCaseCountAggregateInputType | true
    _avg?: DisciplineCaseAvgAggregateInputType
    _sum?: DisciplineCaseSumAggregateInputType
    _min?: DisciplineCaseMinAggregateInputType
    _max?: DisciplineCaseMaxAggregateInputType
  }

  export type DisciplineCaseGroupByOutputType = {
    id: number
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date: Date
    student_id: number
    registered_by_id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: DisciplineCaseCountAggregateOutputType | null
    _avg: DisciplineCaseAvgAggregateOutputType | null
    _sum: DisciplineCaseSumAggregateOutputType | null
    _min: DisciplineCaseMinAggregateOutputType | null
    _max: DisciplineCaseMaxAggregateOutputType | null
  }

  type GetDisciplineCaseGroupByPayload<T extends DisciplineCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineCaseGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineCaseGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    action?: boolean
    incident_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineCase"]>

  export type DisciplineCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    action?: boolean
    incident_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineCase"]>

  export type DisciplineCaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    action?: boolean
    incident_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineCase"]>

  export type DisciplineCaseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    action?: boolean
    incident_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type DisciplineCaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "severity" | "action" | "incident_date" | "student_id" | "registered_by_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["disciplineCase"]>
  export type DisciplineCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }
  export type DisciplineCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }
  export type DisciplineCaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }

  export type $DisciplineCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisciplineCase"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      registered_by: Prisma.$ClassLeaderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      severity: $Enums.DisciplineSeverity
      action: $Enums.DisciplineAction
      incident_date: Date
      student_id: number
      registered_by_id: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["disciplineCase"]>
    composites: {}
  }

  type DisciplineCaseGetPayload<S extends boolean | null | undefined | DisciplineCaseDefaultArgs> = $Result.GetResult<Prisma.$DisciplineCasePayload, S>

  type DisciplineCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineCaseCountAggregateInputType | true
    }

  export interface DisciplineCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisciplineCase'], meta: { name: 'DisciplineCase' } }
    /**
     * Find zero or one DisciplineCase that matches the filter.
     * @param {DisciplineCaseFindUniqueArgs} args - Arguments to find a DisciplineCase
     * @example
     * // Get one DisciplineCase
     * const disciplineCase = await prisma.disciplineCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineCaseFindUniqueArgs>(args: SelectSubset<T, DisciplineCaseFindUniqueArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DisciplineCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineCaseFindUniqueOrThrowArgs} args - Arguments to find a DisciplineCase
     * @example
     * // Get one DisciplineCase
     * const disciplineCase = await prisma.disciplineCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCaseFindFirstArgs} args - Arguments to find a DisciplineCase
     * @example
     * // Get one DisciplineCase
     * const disciplineCase = await prisma.disciplineCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineCaseFindFirstArgs>(args?: SelectSubset<T, DisciplineCaseFindFirstArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCaseFindFirstOrThrowArgs} args - Arguments to find a DisciplineCase
     * @example
     * // Get one DisciplineCase
     * const disciplineCase = await prisma.disciplineCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DisciplineCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisciplineCases
     * const disciplineCases = await prisma.disciplineCase.findMany()
     * 
     * // Get first 10 DisciplineCases
     * const disciplineCases = await prisma.disciplineCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineCaseWithIdOnly = await prisma.disciplineCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineCaseFindManyArgs>(args?: SelectSubset<T, DisciplineCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DisciplineCase.
     * @param {DisciplineCaseCreateArgs} args - Arguments to create a DisciplineCase.
     * @example
     * // Create one DisciplineCase
     * const DisciplineCase = await prisma.disciplineCase.create({
     *   data: {
     *     // ... data to create a DisciplineCase
     *   }
     * })
     * 
     */
    create<T extends DisciplineCaseCreateArgs>(args: SelectSubset<T, DisciplineCaseCreateArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DisciplineCases.
     * @param {DisciplineCaseCreateManyArgs} args - Arguments to create many DisciplineCases.
     * @example
     * // Create many DisciplineCases
     * const disciplineCase = await prisma.disciplineCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineCaseCreateManyArgs>(args?: SelectSubset<T, DisciplineCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DisciplineCases and returns the data saved in the database.
     * @param {DisciplineCaseCreateManyAndReturnArgs} args - Arguments to create many DisciplineCases.
     * @example
     * // Create many DisciplineCases
     * const disciplineCase = await prisma.disciplineCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DisciplineCases and only return the `id`
     * const disciplineCaseWithIdOnly = await prisma.disciplineCase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DisciplineCase.
     * @param {DisciplineCaseDeleteArgs} args - Arguments to delete one DisciplineCase.
     * @example
     * // Delete one DisciplineCase
     * const DisciplineCase = await prisma.disciplineCase.delete({
     *   where: {
     *     // ... filter to delete one DisciplineCase
     *   }
     * })
     * 
     */
    delete<T extends DisciplineCaseDeleteArgs>(args: SelectSubset<T, DisciplineCaseDeleteArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DisciplineCase.
     * @param {DisciplineCaseUpdateArgs} args - Arguments to update one DisciplineCase.
     * @example
     * // Update one DisciplineCase
     * const disciplineCase = await prisma.disciplineCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineCaseUpdateArgs>(args: SelectSubset<T, DisciplineCaseUpdateArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DisciplineCases.
     * @param {DisciplineCaseDeleteManyArgs} args - Arguments to filter DisciplineCases to delete.
     * @example
     * // Delete a few DisciplineCases
     * const { count } = await prisma.disciplineCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineCaseDeleteManyArgs>(args?: SelectSubset<T, DisciplineCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisciplineCases
     * const disciplineCase = await prisma.disciplineCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineCaseUpdateManyArgs>(args: SelectSubset<T, DisciplineCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineCases and returns the data updated in the database.
     * @param {DisciplineCaseUpdateManyAndReturnArgs} args - Arguments to update many DisciplineCases.
     * @example
     * // Update many DisciplineCases
     * const disciplineCase = await prisma.disciplineCase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DisciplineCases and only return the `id`
     * const disciplineCaseWithIdOnly = await prisma.disciplineCase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisciplineCaseUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineCaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DisciplineCase.
     * @param {DisciplineCaseUpsertArgs} args - Arguments to update or create a DisciplineCase.
     * @example
     * // Update or create a DisciplineCase
     * const disciplineCase = await prisma.disciplineCase.upsert({
     *   create: {
     *     // ... data to create a DisciplineCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisciplineCase we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineCaseUpsertArgs>(args: SelectSubset<T, DisciplineCaseUpsertArgs<ExtArgs>>): Prisma__DisciplineCaseClient<$Result.GetResult<Prisma.$DisciplineCasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DisciplineCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCaseCountArgs} args - Arguments to filter DisciplineCases to count.
     * @example
     * // Count the number of DisciplineCases
     * const count = await prisma.disciplineCase.count({
     *   where: {
     *     // ... the filter for the DisciplineCases we want to count
     *   }
     * })
    **/
    count<T extends DisciplineCaseCountArgs>(
      args?: Subset<T, DisciplineCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisciplineCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplineCaseAggregateArgs>(args: Subset<T, DisciplineCaseAggregateArgs>): Prisma.PrismaPromise<GetDisciplineCaseAggregateType<T>>

    /**
     * Group by DisciplineCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineCaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplineCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineCaseGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineCaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplineCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisciplineCase model
   */
  readonly fields: DisciplineCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisciplineCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registered_by<T extends ClassLeaderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassLeaderDefaultArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DisciplineCase model
   */
  interface DisciplineCaseFieldRefs {
    readonly id: FieldRef<"DisciplineCase", 'Int'>
    readonly title: FieldRef<"DisciplineCase", 'String'>
    readonly description: FieldRef<"DisciplineCase", 'String'>
    readonly severity: FieldRef<"DisciplineCase", 'DisciplineSeverity'>
    readonly action: FieldRef<"DisciplineCase", 'DisciplineAction'>
    readonly incident_date: FieldRef<"DisciplineCase", 'DateTime'>
    readonly student_id: FieldRef<"DisciplineCase", 'Int'>
    readonly registered_by_id: FieldRef<"DisciplineCase", 'Int'>
    readonly created_at: FieldRef<"DisciplineCase", 'DateTime'>
    readonly updated_at: FieldRef<"DisciplineCase", 'DateTime'>
    readonly deleted_at: FieldRef<"DisciplineCase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DisciplineCase findUnique
   */
  export type DisciplineCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCase to fetch.
     */
    where: DisciplineCaseWhereUniqueInput
  }

  /**
   * DisciplineCase findUniqueOrThrow
   */
  export type DisciplineCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCase to fetch.
     */
    where: DisciplineCaseWhereUniqueInput
  }

  /**
   * DisciplineCase findFirst
   */
  export type DisciplineCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCase to fetch.
     */
    where?: DisciplineCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCases to fetch.
     */
    orderBy?: DisciplineCaseOrderByWithRelationInput | DisciplineCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineCases.
     */
    cursor?: DisciplineCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineCases.
     */
    distinct?: DisciplineCaseScalarFieldEnum | DisciplineCaseScalarFieldEnum[]
  }

  /**
   * DisciplineCase findFirstOrThrow
   */
  export type DisciplineCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCase to fetch.
     */
    where?: DisciplineCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCases to fetch.
     */
    orderBy?: DisciplineCaseOrderByWithRelationInput | DisciplineCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineCases.
     */
    cursor?: DisciplineCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineCases.
     */
    distinct?: DisciplineCaseScalarFieldEnum | DisciplineCaseScalarFieldEnum[]
  }

  /**
   * DisciplineCase findMany
   */
  export type DisciplineCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineCases to fetch.
     */
    where?: DisciplineCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineCases to fetch.
     */
    orderBy?: DisciplineCaseOrderByWithRelationInput | DisciplineCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisciplineCases.
     */
    cursor?: DisciplineCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineCases.
     */
    distinct?: DisciplineCaseScalarFieldEnum | DisciplineCaseScalarFieldEnum[]
  }

  /**
   * DisciplineCase create
   */
  export type DisciplineCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a DisciplineCase.
     */
    data: XOR<DisciplineCaseCreateInput, DisciplineCaseUncheckedCreateInput>
  }

  /**
   * DisciplineCase createMany
   */
  export type DisciplineCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisciplineCases.
     */
    data: DisciplineCaseCreateManyInput | DisciplineCaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DisciplineCase createManyAndReturn
   */
  export type DisciplineCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * The data used to create many DisciplineCases.
     */
    data: DisciplineCaseCreateManyInput | DisciplineCaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineCase update
   */
  export type DisciplineCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a DisciplineCase.
     */
    data: XOR<DisciplineCaseUpdateInput, DisciplineCaseUncheckedUpdateInput>
    /**
     * Choose, which DisciplineCase to update.
     */
    where: DisciplineCaseWhereUniqueInput
  }

  /**
   * DisciplineCase updateMany
   */
  export type DisciplineCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisciplineCases.
     */
    data: XOR<DisciplineCaseUpdateManyMutationInput, DisciplineCaseUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineCases to update
     */
    where?: DisciplineCaseWhereInput
    /**
     * Limit how many DisciplineCases to update.
     */
    limit?: number
  }

  /**
   * DisciplineCase updateManyAndReturn
   */
  export type DisciplineCaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * The data used to update DisciplineCases.
     */
    data: XOR<DisciplineCaseUpdateManyMutationInput, DisciplineCaseUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineCases to update
     */
    where?: DisciplineCaseWhereInput
    /**
     * Limit how many DisciplineCases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineCase upsert
   */
  export type DisciplineCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the DisciplineCase to update in case it exists.
     */
    where: DisciplineCaseWhereUniqueInput
    /**
     * In case the DisciplineCase found by the `where` argument doesn't exist, create a new DisciplineCase with this data.
     */
    create: XOR<DisciplineCaseCreateInput, DisciplineCaseUncheckedCreateInput>
    /**
     * In case the DisciplineCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineCaseUpdateInput, DisciplineCaseUncheckedUpdateInput>
  }

  /**
   * DisciplineCase delete
   */
  export type DisciplineCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
    /**
     * Filter which DisciplineCase to delete.
     */
    where: DisciplineCaseWhereUniqueInput
  }

  /**
   * DisciplineCase deleteMany
   */
  export type DisciplineCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineCases to delete
     */
    where?: DisciplineCaseWhereInput
    /**
     * Limit how many DisciplineCases to delete.
     */
    limit?: number
  }

  /**
   * DisciplineCase without action
   */
  export type DisciplineCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineCase
     */
    select?: DisciplineCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineCase
     */
    omit?: DisciplineCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineCaseInclude<ExtArgs> | null
  }


  /**
   * Model ClassImpact
   */

  export type AggregateClassImpact = {
    _count: ClassImpactCountAggregateOutputType | null
    _avg: ClassImpactAvgAggregateOutputType | null
    _sum: ClassImpactSumAggregateOutputType | null
    _min: ClassImpactMinAggregateOutputType | null
    _max: ClassImpactMaxAggregateOutputType | null
  }

  export type ClassImpactAvgAggregateOutputType = {
    id: number | null
    points: number | null
    student_id: number | null
    registered_by_id: number | null
  }

  export type ClassImpactSumAggregateOutputType = {
    id: number | null
    points: number | null
    student_id: number | null
    registered_by_id: number | null
  }

  export type ClassImpactMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.ImpactType | null
    points: number | null
    impact_date: Date | null
    student_id: number | null
    registered_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClassImpactMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.ImpactType | null
    points: number | null
    impact_date: Date | null
    student_id: number | null
    registered_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ClassImpactCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    points: number
    impact_date: number
    student_id: number
    registered_by_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ClassImpactAvgAggregateInputType = {
    id?: true
    points?: true
    student_id?: true
    registered_by_id?: true
  }

  export type ClassImpactSumAggregateInputType = {
    id?: true
    points?: true
    student_id?: true
    registered_by_id?: true
  }

  export type ClassImpactMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    points?: true
    impact_date?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClassImpactMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    points?: true
    impact_date?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ClassImpactCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    points?: true
    impact_date?: true
    student_id?: true
    registered_by_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ClassImpactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassImpact to aggregate.
     */
    where?: ClassImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassImpacts to fetch.
     */
    orderBy?: ClassImpactOrderByWithRelationInput | ClassImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassImpacts
    **/
    _count?: true | ClassImpactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassImpactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassImpactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassImpactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassImpactMaxAggregateInputType
  }

  export type GetClassImpactAggregateType<T extends ClassImpactAggregateArgs> = {
        [P in keyof T & keyof AggregateClassImpact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassImpact[P]>
      : GetScalarType<T[P], AggregateClassImpact[P]>
  }




  export type ClassImpactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassImpactWhereInput
    orderBy?: ClassImpactOrderByWithAggregationInput | ClassImpactOrderByWithAggregationInput[]
    by: ClassImpactScalarFieldEnum[] | ClassImpactScalarFieldEnum
    having?: ClassImpactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassImpactCountAggregateInputType | true
    _avg?: ClassImpactAvgAggregateInputType
    _sum?: ClassImpactSumAggregateInputType
    _min?: ClassImpactMinAggregateInputType
    _max?: ClassImpactMaxAggregateInputType
  }

  export type ClassImpactGroupByOutputType = {
    id: number
    title: string
    description: string | null
    type: $Enums.ImpactType
    points: number
    impact_date: Date
    student_id: number
    registered_by_id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ClassImpactCountAggregateOutputType | null
    _avg: ClassImpactAvgAggregateOutputType | null
    _sum: ClassImpactSumAggregateOutputType | null
    _min: ClassImpactMinAggregateOutputType | null
    _max: ClassImpactMaxAggregateOutputType | null
  }

  type GetClassImpactGroupByPayload<T extends ClassImpactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassImpactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassImpactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassImpactGroupByOutputType[P]>
            : GetScalarType<T[P], ClassImpactGroupByOutputType[P]>
        }
      >
    >


  export type ClassImpactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    impact_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classImpact"]>

  export type ClassImpactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    impact_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classImpact"]>

  export type ClassImpactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    impact_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classImpact"]>

  export type ClassImpactSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    points?: boolean
    impact_date?: boolean
    student_id?: boolean
    registered_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ClassImpactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "points" | "impact_date" | "student_id" | "registered_by_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["classImpact"]>
  export type ClassImpactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }
  export type ClassImpactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }
  export type ClassImpactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    registered_by?: boolean | ClassLeaderDefaultArgs<ExtArgs>
  }

  export type $ClassImpactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassImpact"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      registered_by: Prisma.$ClassLeaderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      type: $Enums.ImpactType
      points: number
      impact_date: Date
      student_id: number
      registered_by_id: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["classImpact"]>
    composites: {}
  }

  type ClassImpactGetPayload<S extends boolean | null | undefined | ClassImpactDefaultArgs> = $Result.GetResult<Prisma.$ClassImpactPayload, S>

  type ClassImpactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassImpactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassImpactCountAggregateInputType | true
    }

  export interface ClassImpactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassImpact'], meta: { name: 'ClassImpact' } }
    /**
     * Find zero or one ClassImpact that matches the filter.
     * @param {ClassImpactFindUniqueArgs} args - Arguments to find a ClassImpact
     * @example
     * // Get one ClassImpact
     * const classImpact = await prisma.classImpact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassImpactFindUniqueArgs>(args: SelectSubset<T, ClassImpactFindUniqueArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassImpact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassImpactFindUniqueOrThrowArgs} args - Arguments to find a ClassImpact
     * @example
     * // Get one ClassImpact
     * const classImpact = await prisma.classImpact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassImpactFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassImpactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassImpact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassImpactFindFirstArgs} args - Arguments to find a ClassImpact
     * @example
     * // Get one ClassImpact
     * const classImpact = await prisma.classImpact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassImpactFindFirstArgs>(args?: SelectSubset<T, ClassImpactFindFirstArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassImpact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassImpactFindFirstOrThrowArgs} args - Arguments to find a ClassImpact
     * @example
     * // Get one ClassImpact
     * const classImpact = await prisma.classImpact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassImpactFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassImpactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassImpacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassImpactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassImpacts
     * const classImpacts = await prisma.classImpact.findMany()
     * 
     * // Get first 10 ClassImpacts
     * const classImpacts = await prisma.classImpact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classImpactWithIdOnly = await prisma.classImpact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassImpactFindManyArgs>(args?: SelectSubset<T, ClassImpactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassImpact.
     * @param {ClassImpactCreateArgs} args - Arguments to create a ClassImpact.
     * @example
     * // Create one ClassImpact
     * const ClassImpact = await prisma.classImpact.create({
     *   data: {
     *     // ... data to create a ClassImpact
     *   }
     * })
     * 
     */
    create<T extends ClassImpactCreateArgs>(args: SelectSubset<T, ClassImpactCreateArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassImpacts.
     * @param {ClassImpactCreateManyArgs} args - Arguments to create many ClassImpacts.
     * @example
     * // Create many ClassImpacts
     * const classImpact = await prisma.classImpact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassImpactCreateManyArgs>(args?: SelectSubset<T, ClassImpactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassImpacts and returns the data saved in the database.
     * @param {ClassImpactCreateManyAndReturnArgs} args - Arguments to create many ClassImpacts.
     * @example
     * // Create many ClassImpacts
     * const classImpact = await prisma.classImpact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassImpacts and only return the `id`
     * const classImpactWithIdOnly = await prisma.classImpact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassImpactCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassImpactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassImpact.
     * @param {ClassImpactDeleteArgs} args - Arguments to delete one ClassImpact.
     * @example
     * // Delete one ClassImpact
     * const ClassImpact = await prisma.classImpact.delete({
     *   where: {
     *     // ... filter to delete one ClassImpact
     *   }
     * })
     * 
     */
    delete<T extends ClassImpactDeleteArgs>(args: SelectSubset<T, ClassImpactDeleteArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassImpact.
     * @param {ClassImpactUpdateArgs} args - Arguments to update one ClassImpact.
     * @example
     * // Update one ClassImpact
     * const classImpact = await prisma.classImpact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassImpactUpdateArgs>(args: SelectSubset<T, ClassImpactUpdateArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassImpacts.
     * @param {ClassImpactDeleteManyArgs} args - Arguments to filter ClassImpacts to delete.
     * @example
     * // Delete a few ClassImpacts
     * const { count } = await prisma.classImpact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassImpactDeleteManyArgs>(args?: SelectSubset<T, ClassImpactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassImpacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassImpactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassImpacts
     * const classImpact = await prisma.classImpact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassImpactUpdateManyArgs>(args: SelectSubset<T, ClassImpactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassImpacts and returns the data updated in the database.
     * @param {ClassImpactUpdateManyAndReturnArgs} args - Arguments to update many ClassImpacts.
     * @example
     * // Update many ClassImpacts
     * const classImpact = await prisma.classImpact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassImpacts and only return the `id`
     * const classImpactWithIdOnly = await prisma.classImpact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassImpactUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassImpactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassImpact.
     * @param {ClassImpactUpsertArgs} args - Arguments to update or create a ClassImpact.
     * @example
     * // Update or create a ClassImpact
     * const classImpact = await prisma.classImpact.upsert({
     *   create: {
     *     // ... data to create a ClassImpact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassImpact we want to update
     *   }
     * })
     */
    upsert<T extends ClassImpactUpsertArgs>(args: SelectSubset<T, ClassImpactUpsertArgs<ExtArgs>>): Prisma__ClassImpactClient<$Result.GetResult<Prisma.$ClassImpactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassImpacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassImpactCountArgs} args - Arguments to filter ClassImpacts to count.
     * @example
     * // Count the number of ClassImpacts
     * const count = await prisma.classImpact.count({
     *   where: {
     *     // ... the filter for the ClassImpacts we want to count
     *   }
     * })
    **/
    count<T extends ClassImpactCountArgs>(
      args?: Subset<T, ClassImpactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassImpactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassImpact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassImpactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassImpactAggregateArgs>(args: Subset<T, ClassImpactAggregateArgs>): Prisma.PrismaPromise<GetClassImpactAggregateType<T>>

    /**
     * Group by ClassImpact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassImpactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassImpactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassImpactGroupByArgs['orderBy'] }
        : { orderBy?: ClassImpactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassImpactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassImpactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassImpact model
   */
  readonly fields: ClassImpactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassImpact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassImpactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registered_by<T extends ClassLeaderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassLeaderDefaultArgs<ExtArgs>>): Prisma__ClassLeaderClient<$Result.GetResult<Prisma.$ClassLeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassImpact model
   */
  interface ClassImpactFieldRefs {
    readonly id: FieldRef<"ClassImpact", 'Int'>
    readonly title: FieldRef<"ClassImpact", 'String'>
    readonly description: FieldRef<"ClassImpact", 'String'>
    readonly type: FieldRef<"ClassImpact", 'ImpactType'>
    readonly points: FieldRef<"ClassImpact", 'Int'>
    readonly impact_date: FieldRef<"ClassImpact", 'DateTime'>
    readonly student_id: FieldRef<"ClassImpact", 'Int'>
    readonly registered_by_id: FieldRef<"ClassImpact", 'Int'>
    readonly created_at: FieldRef<"ClassImpact", 'DateTime'>
    readonly updated_at: FieldRef<"ClassImpact", 'DateTime'>
    readonly deleted_at: FieldRef<"ClassImpact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassImpact findUnique
   */
  export type ClassImpactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * Filter, which ClassImpact to fetch.
     */
    where: ClassImpactWhereUniqueInput
  }

  /**
   * ClassImpact findUniqueOrThrow
   */
  export type ClassImpactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * Filter, which ClassImpact to fetch.
     */
    where: ClassImpactWhereUniqueInput
  }

  /**
   * ClassImpact findFirst
   */
  export type ClassImpactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * Filter, which ClassImpact to fetch.
     */
    where?: ClassImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassImpacts to fetch.
     */
    orderBy?: ClassImpactOrderByWithRelationInput | ClassImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassImpacts.
     */
    cursor?: ClassImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassImpacts.
     */
    distinct?: ClassImpactScalarFieldEnum | ClassImpactScalarFieldEnum[]
  }

  /**
   * ClassImpact findFirstOrThrow
   */
  export type ClassImpactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * Filter, which ClassImpact to fetch.
     */
    where?: ClassImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassImpacts to fetch.
     */
    orderBy?: ClassImpactOrderByWithRelationInput | ClassImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassImpacts.
     */
    cursor?: ClassImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassImpacts.
     */
    distinct?: ClassImpactScalarFieldEnum | ClassImpactScalarFieldEnum[]
  }

  /**
   * ClassImpact findMany
   */
  export type ClassImpactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * Filter, which ClassImpacts to fetch.
     */
    where?: ClassImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassImpacts to fetch.
     */
    orderBy?: ClassImpactOrderByWithRelationInput | ClassImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassImpacts.
     */
    cursor?: ClassImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassImpacts.
     */
    distinct?: ClassImpactScalarFieldEnum | ClassImpactScalarFieldEnum[]
  }

  /**
   * ClassImpact create
   */
  export type ClassImpactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassImpact.
     */
    data: XOR<ClassImpactCreateInput, ClassImpactUncheckedCreateInput>
  }

  /**
   * ClassImpact createMany
   */
  export type ClassImpactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassImpacts.
     */
    data: ClassImpactCreateManyInput | ClassImpactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassImpact createManyAndReturn
   */
  export type ClassImpactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * The data used to create many ClassImpacts.
     */
    data: ClassImpactCreateManyInput | ClassImpactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassImpact update
   */
  export type ClassImpactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassImpact.
     */
    data: XOR<ClassImpactUpdateInput, ClassImpactUncheckedUpdateInput>
    /**
     * Choose, which ClassImpact to update.
     */
    where: ClassImpactWhereUniqueInput
  }

  /**
   * ClassImpact updateMany
   */
  export type ClassImpactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassImpacts.
     */
    data: XOR<ClassImpactUpdateManyMutationInput, ClassImpactUncheckedUpdateManyInput>
    /**
     * Filter which ClassImpacts to update
     */
    where?: ClassImpactWhereInput
    /**
     * Limit how many ClassImpacts to update.
     */
    limit?: number
  }

  /**
   * ClassImpact updateManyAndReturn
   */
  export type ClassImpactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * The data used to update ClassImpacts.
     */
    data: XOR<ClassImpactUpdateManyMutationInput, ClassImpactUncheckedUpdateManyInput>
    /**
     * Filter which ClassImpacts to update
     */
    where?: ClassImpactWhereInput
    /**
     * Limit how many ClassImpacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassImpact upsert
   */
  export type ClassImpactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassImpact to update in case it exists.
     */
    where: ClassImpactWhereUniqueInput
    /**
     * In case the ClassImpact found by the `where` argument doesn't exist, create a new ClassImpact with this data.
     */
    create: XOR<ClassImpactCreateInput, ClassImpactUncheckedCreateInput>
    /**
     * In case the ClassImpact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassImpactUpdateInput, ClassImpactUncheckedUpdateInput>
  }

  /**
   * ClassImpact delete
   */
  export type ClassImpactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
    /**
     * Filter which ClassImpact to delete.
     */
    where: ClassImpactWhereUniqueInput
  }

  /**
   * ClassImpact deleteMany
   */
  export type ClassImpactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassImpacts to delete
     */
    where?: ClassImpactWhereInput
    /**
     * Limit how many ClassImpacts to delete.
     */
    limit?: number
  }

  /**
   * ClassImpact without action
   */
  export type ClassImpactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassImpact
     */
    select?: ClassImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassImpact
     */
    omit?: ClassImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassImpactInclude<ExtArgs> | null
  }


  /**
   * Model Competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    id: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    id: number | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: $Enums.CompetitionType | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: $Enums.CompetitionType | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    id?: true
  }

  export type CompetitionSumAggregateInputType = {
    id?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithAggregationInput | CompetitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: number
    name: string
    description: string | null
    type: $Enums.CompetitionType
    start_date: Date
    end_date: Date | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    participants?: boolean | Competition$participantsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type CompetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "start_date" | "end_date" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["competition"]>
  export type CompetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Competition$participantsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompetitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competition"
    objects: {
      participants: Prisma.$CompetitionParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      type: $Enums.CompetitionType
      start_date: Date
      end_date: Date | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionDefaultArgs> = $Result.GetResult<Prisma.$CompetitionPayload, S>

  type CompetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competition'], meta: { name: 'Competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionFindUniqueArgs>(args: SelectSubset<T, CompetitionFindUniqueArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionFindFirstArgs>(args?: SelectSubset<T, CompetitionFindFirstArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionFindManyArgs>(args?: SelectSubset<T, CompetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends CompetitionCreateArgs>(args: SelectSubset<T, CompetitionCreateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionCreateManyArgs>(args?: SelectSubset<T, CompetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {CompetitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends CompetitionDeleteArgs>(args: SelectSubset<T, CompetitionDeleteArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionUpdateArgs>(args: SelectSubset<T, CompetitionUpdateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionDeleteManyArgs>(args?: SelectSubset<T, CompetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionUpdateManyArgs>(args: SelectSubset<T, CompetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {CompetitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionUpsertArgs>(args: SelectSubset<T, CompetitionUpsertArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competition model
   */
  readonly fields: CompetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Competition$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Competition$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Competition model
   */
  interface CompetitionFieldRefs {
    readonly id: FieldRef<"Competition", 'Int'>
    readonly name: FieldRef<"Competition", 'String'>
    readonly description: FieldRef<"Competition", 'String'>
    readonly type: FieldRef<"Competition", 'CompetitionType'>
    readonly start_date: FieldRef<"Competition", 'DateTime'>
    readonly end_date: FieldRef<"Competition", 'DateTime'>
    readonly created_at: FieldRef<"Competition", 'DateTime'>
    readonly updated_at: FieldRef<"Competition", 'DateTime'>
    readonly deleted_at: FieldRef<"Competition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competition findUnique
   */
  export type CompetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findFirst
   */
  export type CompetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition create
   */
  export type CompetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Competition.
     */
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }

  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition createManyAndReturn
   */
  export type CompetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition update
   */
  export type CompetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition updateManyAndReturn
   */
  export type CompetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }

  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to delete.
     */
    limit?: number
  }

  /**
   * Competition.participants
   */
  export type Competition$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    where?: CompetitionParticipantWhereInput
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    cursor?: CompetitionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * Competition without action
   */
  export type CompetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionParticipant
   */

  export type AggregateCompetitionParticipant = {
    _count: CompetitionParticipantCountAggregateOutputType | null
    _avg: CompetitionParticipantAvgAggregateOutputType | null
    _sum: CompetitionParticipantSumAggregateOutputType | null
    _min: CompetitionParticipantMinAggregateOutputType | null
    _max: CompetitionParticipantMaxAggregateOutputType | null
  }

  export type CompetitionParticipantAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    competition_id: number | null
    points: number | null
  }

  export type CompetitionParticipantSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    competition_id: number | null
    points: number | null
  }

  export type CompetitionParticipantMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    competition_id: number | null
    position: string | null
    points: number | null
    joined_at: Date | null
    deleted_at: Date | null
  }

  export type CompetitionParticipantMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    competition_id: number | null
    position: string | null
    points: number | null
    joined_at: Date | null
    deleted_at: Date | null
  }

  export type CompetitionParticipantCountAggregateOutputType = {
    id: number
    student_id: number
    competition_id: number
    position: number
    points: number
    joined_at: number
    deleted_at: number
    _all: number
  }


  export type CompetitionParticipantAvgAggregateInputType = {
    id?: true
    student_id?: true
    competition_id?: true
    points?: true
  }

  export type CompetitionParticipantSumAggregateInputType = {
    id?: true
    student_id?: true
    competition_id?: true
    points?: true
  }

  export type CompetitionParticipantMinAggregateInputType = {
    id?: true
    student_id?: true
    competition_id?: true
    position?: true
    points?: true
    joined_at?: true
    deleted_at?: true
  }

  export type CompetitionParticipantMaxAggregateInputType = {
    id?: true
    student_id?: true
    competition_id?: true
    position?: true
    points?: true
    joined_at?: true
    deleted_at?: true
  }

  export type CompetitionParticipantCountAggregateInputType = {
    id?: true
    student_id?: true
    competition_id?: true
    position?: true
    points?: true
    joined_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CompetitionParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionParticipant to aggregate.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionParticipants
    **/
    _count?: true | CompetitionParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionParticipantMaxAggregateInputType
  }

  export type GetCompetitionParticipantAggregateType<T extends CompetitionParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionParticipant[P]>
      : GetScalarType<T[P], AggregateCompetitionParticipant[P]>
  }




  export type CompetitionParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionParticipantWhereInput
    orderBy?: CompetitionParticipantOrderByWithAggregationInput | CompetitionParticipantOrderByWithAggregationInput[]
    by: CompetitionParticipantScalarFieldEnum[] | CompetitionParticipantScalarFieldEnum
    having?: CompetitionParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionParticipantCountAggregateInputType | true
    _avg?: CompetitionParticipantAvgAggregateInputType
    _sum?: CompetitionParticipantSumAggregateInputType
    _min?: CompetitionParticipantMinAggregateInputType
    _max?: CompetitionParticipantMaxAggregateInputType
  }

  export type CompetitionParticipantGroupByOutputType = {
    id: number
    student_id: number
    competition_id: number
    position: string | null
    points: number
    joined_at: Date
    deleted_at: Date | null
    _count: CompetitionParticipantCountAggregateOutputType | null
    _avg: CompetitionParticipantAvgAggregateOutputType | null
    _sum: CompetitionParticipantSumAggregateOutputType | null
    _min: CompetitionParticipantMinAggregateOutputType | null
    _max: CompetitionParticipantMaxAggregateOutputType | null
  }

  type GetCompetitionParticipantGroupByPayload<T extends CompetitionParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionParticipantGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    competition_id?: boolean
    position?: boolean
    points?: boolean
    joined_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionParticipant"]>

  export type CompetitionParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    competition_id?: boolean
    position?: boolean
    points?: boolean
    joined_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionParticipant"]>

  export type CompetitionParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    competition_id?: boolean
    position?: boolean
    points?: boolean
    joined_at?: boolean
    deleted_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionParticipant"]>

  export type CompetitionParticipantSelectScalar = {
    id?: boolean
    student_id?: boolean
    competition_id?: boolean
    position?: boolean
    points?: boolean
    joined_at?: boolean
    deleted_at?: boolean
  }

  export type CompetitionParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "competition_id" | "position" | "points" | "joined_at" | "deleted_at", ExtArgs["result"]["competitionParticipant"]>
  export type CompetitionParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }
  export type CompetitionParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }
  export type CompetitionParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }

  export type $CompetitionParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionParticipant"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      competition: Prisma.$CompetitionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      competition_id: number
      position: string | null
      points: number
      joined_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["competitionParticipant"]>
    composites: {}
  }

  type CompetitionParticipantGetPayload<S extends boolean | null | undefined | CompetitionParticipantDefaultArgs> = $Result.GetResult<Prisma.$CompetitionParticipantPayload, S>

  type CompetitionParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionParticipantCountAggregateInputType | true
    }

  export interface CompetitionParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionParticipant'], meta: { name: 'CompetitionParticipant' } }
    /**
     * Find zero or one CompetitionParticipant that matches the filter.
     * @param {CompetitionParticipantFindUniqueArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionParticipantFindUniqueArgs>(args: SelectSubset<T, CompetitionParticipantFindUniqueArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionParticipantFindUniqueOrThrowArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantFindFirstArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionParticipantFindFirstArgs>(args?: SelectSubset<T, CompetitionParticipantFindFirstArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantFindFirstOrThrowArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionParticipants
     * const competitionParticipants = await prisma.competitionParticipant.findMany()
     * 
     * // Get first 10 CompetitionParticipants
     * const competitionParticipants = await prisma.competitionParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionParticipantWithIdOnly = await prisma.competitionParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionParticipantFindManyArgs>(args?: SelectSubset<T, CompetitionParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionParticipant.
     * @param {CompetitionParticipantCreateArgs} args - Arguments to create a CompetitionParticipant.
     * @example
     * // Create one CompetitionParticipant
     * const CompetitionParticipant = await prisma.competitionParticipant.create({
     *   data: {
     *     // ... data to create a CompetitionParticipant
     *   }
     * })
     * 
     */
    create<T extends CompetitionParticipantCreateArgs>(args: SelectSubset<T, CompetitionParticipantCreateArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionParticipants.
     * @param {CompetitionParticipantCreateManyArgs} args - Arguments to create many CompetitionParticipants.
     * @example
     * // Create many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionParticipantCreateManyArgs>(args?: SelectSubset<T, CompetitionParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionParticipants and returns the data saved in the database.
     * @param {CompetitionParticipantCreateManyAndReturnArgs} args - Arguments to create many CompetitionParticipants.
     * @example
     * // Create many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionParticipants and only return the `id`
     * const competitionParticipantWithIdOnly = await prisma.competitionParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionParticipant.
     * @param {CompetitionParticipantDeleteArgs} args - Arguments to delete one CompetitionParticipant.
     * @example
     * // Delete one CompetitionParticipant
     * const CompetitionParticipant = await prisma.competitionParticipant.delete({
     *   where: {
     *     // ... filter to delete one CompetitionParticipant
     *   }
     * })
     * 
     */
    delete<T extends CompetitionParticipantDeleteArgs>(args: SelectSubset<T, CompetitionParticipantDeleteArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionParticipant.
     * @param {CompetitionParticipantUpdateArgs} args - Arguments to update one CompetitionParticipant.
     * @example
     * // Update one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionParticipantUpdateArgs>(args: SelectSubset<T, CompetitionParticipantUpdateArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionParticipants.
     * @param {CompetitionParticipantDeleteManyArgs} args - Arguments to filter CompetitionParticipants to delete.
     * @example
     * // Delete a few CompetitionParticipants
     * const { count } = await prisma.competitionParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionParticipantDeleteManyArgs>(args?: SelectSubset<T, CompetitionParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionParticipantUpdateManyArgs>(args: SelectSubset<T, CompetitionParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionParticipants and returns the data updated in the database.
     * @param {CompetitionParticipantUpdateManyAndReturnArgs} args - Arguments to update many CompetitionParticipants.
     * @example
     * // Update many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionParticipants and only return the `id`
     * const competitionParticipantWithIdOnly = await prisma.competitionParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionParticipant.
     * @param {CompetitionParticipantUpsertArgs} args - Arguments to update or create a CompetitionParticipant.
     * @example
     * // Update or create a CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.upsert({
     *   create: {
     *     // ... data to create a CompetitionParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionParticipant we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionParticipantUpsertArgs>(args: SelectSubset<T, CompetitionParticipantUpsertArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantCountArgs} args - Arguments to filter CompetitionParticipants to count.
     * @example
     * // Count the number of CompetitionParticipants
     * const count = await prisma.competitionParticipant.count({
     *   where: {
     *     // ... the filter for the CompetitionParticipants we want to count
     *   }
     * })
    **/
    count<T extends CompetitionParticipantCountArgs>(
      args?: Subset<T, CompetitionParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionParticipantAggregateArgs>(args: Subset<T, CompetitionParticipantAggregateArgs>): Prisma.PrismaPromise<GetCompetitionParticipantAggregateType<T>>

    /**
     * Group by CompetitionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionParticipantGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionParticipant model
   */
  readonly fields: CompetitionParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompetitionParticipant model
   */
  interface CompetitionParticipantFieldRefs {
    readonly id: FieldRef<"CompetitionParticipant", 'Int'>
    readonly student_id: FieldRef<"CompetitionParticipant", 'Int'>
    readonly competition_id: FieldRef<"CompetitionParticipant", 'Int'>
    readonly position: FieldRef<"CompetitionParticipant", 'String'>
    readonly points: FieldRef<"CompetitionParticipant", 'Int'>
    readonly joined_at: FieldRef<"CompetitionParticipant", 'DateTime'>
    readonly deleted_at: FieldRef<"CompetitionParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionParticipant findUnique
   */
  export type CompetitionParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant findUniqueOrThrow
   */
  export type CompetitionParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant findFirst
   */
  export type CompetitionParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionParticipants.
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionParticipants.
     */
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * CompetitionParticipant findFirstOrThrow
   */
  export type CompetitionParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionParticipants.
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionParticipants.
     */
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * CompetitionParticipant findMany
   */
  export type CompetitionParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipants to fetch.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionParticipants.
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionParticipants.
     */
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * CompetitionParticipant create
   */
  export type CompetitionParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionParticipant.
     */
    data: XOR<CompetitionParticipantCreateInput, CompetitionParticipantUncheckedCreateInput>
  }

  /**
   * CompetitionParticipant createMany
   */
  export type CompetitionParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionParticipants.
     */
    data: CompetitionParticipantCreateManyInput | CompetitionParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionParticipant createManyAndReturn
   */
  export type CompetitionParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionParticipants.
     */
    data: CompetitionParticipantCreateManyInput | CompetitionParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionParticipant update
   */
  export type CompetitionParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionParticipant.
     */
    data: XOR<CompetitionParticipantUpdateInput, CompetitionParticipantUncheckedUpdateInput>
    /**
     * Choose, which CompetitionParticipant to update.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant updateMany
   */
  export type CompetitionParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionParticipants.
     */
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionParticipants to update
     */
    where?: CompetitionParticipantWhereInput
    /**
     * Limit how many CompetitionParticipants to update.
     */
    limit?: number
  }

  /**
   * CompetitionParticipant updateManyAndReturn
   */
  export type CompetitionParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionParticipants.
     */
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionParticipants to update
     */
    where?: CompetitionParticipantWhereInput
    /**
     * Limit how many CompetitionParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionParticipant upsert
   */
  export type CompetitionParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionParticipant to update in case it exists.
     */
    where: CompetitionParticipantWhereUniqueInput
    /**
     * In case the CompetitionParticipant found by the `where` argument doesn't exist, create a new CompetitionParticipant with this data.
     */
    create: XOR<CompetitionParticipantCreateInput, CompetitionParticipantUncheckedCreateInput>
    /**
     * In case the CompetitionParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionParticipantUpdateInput, CompetitionParticipantUncheckedUpdateInput>
  }

  /**
   * CompetitionParticipant delete
   */
  export type CompetitionParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter which CompetitionParticipant to delete.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant deleteMany
   */
  export type CompetitionParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionParticipants to delete
     */
    where?: CompetitionParticipantWhereInput
    /**
     * Limit how many CompetitionParticipants to delete.
     */
    limit?: number
  }

  /**
   * CompetitionParticipant without action
   */
  export type CompetitionParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentScalarFieldEnum: {
    id: 'id',
    student_code: 'student_code',
    role: 'role',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    phone: 'phone',
    status: 'status',
    registered_at: 'registered_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ClassLeaderScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ClassLeaderScalarFieldEnum = (typeof ClassLeaderScalarFieldEnum)[keyof typeof ClassLeaderScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    points: 'points',
    achieved_at: 'achieved_at',
    student_id: 'student_id',
    registered_by_id: 'registered_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const DisciplineCaseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    severity: 'severity',
    action: 'action',
    incident_date: 'incident_date',
    student_id: 'student_id',
    registered_by_id: 'registered_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type DisciplineCaseScalarFieldEnum = (typeof DisciplineCaseScalarFieldEnum)[keyof typeof DisciplineCaseScalarFieldEnum]


  export const ClassImpactScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    points: 'points',
    impact_date: 'impact_date',
    student_id: 'student_id',
    registered_by_id: 'registered_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ClassImpactScalarFieldEnum = (typeof ClassImpactScalarFieldEnum)[keyof typeof ClassImpactScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const CompetitionParticipantScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    competition_id: 'competition_id',
    position: 'position',
    points: 'points',
    joined_at: 'joined_at',
    deleted_at: 'deleted_at'
  };

  export type CompetitionParticipantScalarFieldEnum = (typeof CompetitionParticipantScalarFieldEnum)[keyof typeof CompetitionParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'StudentStatus'
   */
  export type EnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus'>
    


  /**
   * Reference to a field of type 'StudentStatus[]'
   */
  export type ListEnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AchievementType'
   */
  export type EnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType'>
    


  /**
   * Reference to a field of type 'AchievementType[]'
   */
  export type ListEnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType[]'>
    


  /**
   * Reference to a field of type 'DisciplineSeverity'
   */
  export type EnumDisciplineSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplineSeverity'>
    


  /**
   * Reference to a field of type 'DisciplineSeverity[]'
   */
  export type ListEnumDisciplineSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplineSeverity[]'>
    


  /**
   * Reference to a field of type 'DisciplineAction'
   */
  export type EnumDisciplineActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplineAction'>
    


  /**
   * Reference to a field of type 'DisciplineAction[]'
   */
  export type ListEnumDisciplineActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisciplineAction[]'>
    


  /**
   * Reference to a field of type 'ImpactType'
   */
  export type EnumImpactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImpactType'>
    


  /**
   * Reference to a field of type 'ImpactType[]'
   */
  export type ListEnumImpactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImpactType[]'>
    


  /**
   * Reference to a field of type 'CompetitionType'
   */
  export type EnumCompetitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompetitionType'>
    


  /**
   * Reference to a field of type 'CompetitionType[]'
   */
  export type ListEnumCompetitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompetitionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    student_code?: StringFilter<"Student"> | string
    role?: EnumRoleFilter<"Student"> | $Enums.Role
    first_name?: StringFilter<"Student"> | string
    middle_name?: StringFilter<"Student"> | string
    last_name?: StringFilter<"Student"> | string
    phone?: StringFilter<"Student"> | string
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    registered_at?: DateTimeFilter<"Student"> | Date | string
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Student"> | Date | string | null
    achievements?: AchievementListRelationFilter
    discipline_cases?: DisciplineCaseListRelationFilter
    class_impacts?: ClassImpactListRelationFilter
    competitions?: CompetitionParticipantListRelationFilter
    class_leaders?: XOR<ClassLeaderNullableScalarRelationFilter, ClassLeaderWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    student_code?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    registered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    achievements?: AchievementOrderByRelationAggregateInput
    discipline_cases?: DisciplineCaseOrderByRelationAggregateInput
    class_impacts?: ClassImpactOrderByRelationAggregateInput
    competitions?: CompetitionParticipantOrderByRelationAggregateInput
    class_leaders?: ClassLeaderOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    student_code?: string
    phone?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    role?: EnumRoleFilter<"Student"> | $Enums.Role
    first_name?: StringFilter<"Student"> | string
    middle_name?: StringFilter<"Student"> | string
    last_name?: StringFilter<"Student"> | string
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    registered_at?: DateTimeFilter<"Student"> | Date | string
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Student"> | Date | string | null
    achievements?: AchievementListRelationFilter
    discipline_cases?: DisciplineCaseListRelationFilter
    class_impacts?: ClassImpactListRelationFilter
    competitions?: CompetitionParticipantListRelationFilter
    class_leaders?: XOR<ClassLeaderNullableScalarRelationFilter, ClassLeaderWhereInput> | null
  }, "id" | "student_code" | "phone">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    student_code?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    registered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    student_code?: StringWithAggregatesFilter<"Student"> | string
    role?: EnumRoleWithAggregatesFilter<"Student"> | $Enums.Role
    first_name?: StringWithAggregatesFilter<"Student"> | string
    middle_name?: StringWithAggregatesFilter<"Student"> | string
    last_name?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringWithAggregatesFilter<"Student"> | string
    status?: EnumStudentStatusWithAggregatesFilter<"Student"> | $Enums.StudentStatus
    registered_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
  }

  export type ClassLeaderWhereInput = {
    AND?: ClassLeaderWhereInput | ClassLeaderWhereInput[]
    OR?: ClassLeaderWhereInput[]
    NOT?: ClassLeaderWhereInput | ClassLeaderWhereInput[]
    id?: IntFilter<"ClassLeader"> | number
    student_id?: IntFilter<"ClassLeader"> | number
    created_at?: DateTimeFilter<"ClassLeader"> | Date | string
    updated_at?: DateTimeFilter<"ClassLeader"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ClassLeader"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    achievements?: AchievementListRelationFilter
    discipline_cases?: DisciplineCaseListRelationFilter
    class_impacts?: ClassImpactListRelationFilter
  }

  export type ClassLeaderOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    achievements?: AchievementOrderByRelationAggregateInput
    discipline_cases?: DisciplineCaseOrderByRelationAggregateInput
    class_impacts?: ClassImpactOrderByRelationAggregateInput
  }

  export type ClassLeaderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    student_id?: number
    AND?: ClassLeaderWhereInput | ClassLeaderWhereInput[]
    OR?: ClassLeaderWhereInput[]
    NOT?: ClassLeaderWhereInput | ClassLeaderWhereInput[]
    created_at?: DateTimeFilter<"ClassLeader"> | Date | string
    updated_at?: DateTimeFilter<"ClassLeader"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ClassLeader"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    achievements?: AchievementListRelationFilter
    discipline_cases?: DisciplineCaseListRelationFilter
    class_impacts?: ClassImpactListRelationFilter
  }, "id" | "student_id">

  export type ClassLeaderOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ClassLeaderCountOrderByAggregateInput
    _avg?: ClassLeaderAvgOrderByAggregateInput
    _max?: ClassLeaderMaxOrderByAggregateInput
    _min?: ClassLeaderMinOrderByAggregateInput
    _sum?: ClassLeaderSumOrderByAggregateInput
  }

  export type ClassLeaderScalarWhereWithAggregatesInput = {
    AND?: ClassLeaderScalarWhereWithAggregatesInput | ClassLeaderScalarWhereWithAggregatesInput[]
    OR?: ClassLeaderScalarWhereWithAggregatesInput[]
    NOT?: ClassLeaderScalarWhereWithAggregatesInput | ClassLeaderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassLeader"> | number
    student_id?: IntWithAggregatesFilter<"ClassLeader"> | number
    created_at?: DateTimeWithAggregatesFilter<"ClassLeader"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClassLeader"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ClassLeader"> | Date | string | null
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: IntFilter<"Achievement"> | number
    title?: StringFilter<"Achievement"> | string
    description?: StringNullableFilter<"Achievement"> | string | null
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    points?: IntFilter<"Achievement"> | number
    achieved_at?: DateTimeFilter<"Achievement"> | Date | string
    student_id?: IntFilter<"Achievement"> | number
    registered_by_id?: IntFilter<"Achievement"> | number
    created_at?: DateTimeFilter<"Achievement"> | Date | string
    updated_at?: DateTimeFilter<"Achievement"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    registered_by?: XOR<ClassLeaderScalarRelationFilter, ClassLeaderWhereInput>
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    points?: SortOrder
    achieved_at?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    registered_by?: ClassLeaderOrderByWithRelationInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    title?: StringFilter<"Achievement"> | string
    description?: StringNullableFilter<"Achievement"> | string | null
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    points?: IntFilter<"Achievement"> | number
    achieved_at?: DateTimeFilter<"Achievement"> | Date | string
    student_id?: IntFilter<"Achievement"> | number
    registered_by_id?: IntFilter<"Achievement"> | number
    created_at?: DateTimeFilter<"Achievement"> | Date | string
    updated_at?: DateTimeFilter<"Achievement"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    registered_by?: XOR<ClassLeaderScalarRelationFilter, ClassLeaderWhereInput>
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    points?: SortOrder
    achieved_at?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achievement"> | number
    title?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    type?: EnumAchievementTypeWithAggregatesFilter<"Achievement"> | $Enums.AchievementType
    points?: IntWithAggregatesFilter<"Achievement"> | number
    achieved_at?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    student_id?: IntWithAggregatesFilter<"Achievement"> | number
    registered_by_id?: IntWithAggregatesFilter<"Achievement"> | number
    created_at?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
  }

  export type DisciplineCaseWhereInput = {
    AND?: DisciplineCaseWhereInput | DisciplineCaseWhereInput[]
    OR?: DisciplineCaseWhereInput[]
    NOT?: DisciplineCaseWhereInput | DisciplineCaseWhereInput[]
    id?: IntFilter<"DisciplineCase"> | number
    title?: StringFilter<"DisciplineCase"> | string
    description?: StringFilter<"DisciplineCase"> | string
    severity?: EnumDisciplineSeverityFilter<"DisciplineCase"> | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFilter<"DisciplineCase"> | $Enums.DisciplineAction
    incident_date?: DateTimeFilter<"DisciplineCase"> | Date | string
    student_id?: IntFilter<"DisciplineCase"> | number
    registered_by_id?: IntFilter<"DisciplineCase"> | number
    created_at?: DateTimeFilter<"DisciplineCase"> | Date | string
    updated_at?: DateTimeFilter<"DisciplineCase"> | Date | string
    deleted_at?: DateTimeNullableFilter<"DisciplineCase"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    registered_by?: XOR<ClassLeaderScalarRelationFilter, ClassLeaderWhereInput>
  }

  export type DisciplineCaseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    action?: SortOrder
    incident_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    registered_by?: ClassLeaderOrderByWithRelationInput
  }

  export type DisciplineCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisciplineCaseWhereInput | DisciplineCaseWhereInput[]
    OR?: DisciplineCaseWhereInput[]
    NOT?: DisciplineCaseWhereInput | DisciplineCaseWhereInput[]
    title?: StringFilter<"DisciplineCase"> | string
    description?: StringFilter<"DisciplineCase"> | string
    severity?: EnumDisciplineSeverityFilter<"DisciplineCase"> | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFilter<"DisciplineCase"> | $Enums.DisciplineAction
    incident_date?: DateTimeFilter<"DisciplineCase"> | Date | string
    student_id?: IntFilter<"DisciplineCase"> | number
    registered_by_id?: IntFilter<"DisciplineCase"> | number
    created_at?: DateTimeFilter<"DisciplineCase"> | Date | string
    updated_at?: DateTimeFilter<"DisciplineCase"> | Date | string
    deleted_at?: DateTimeNullableFilter<"DisciplineCase"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    registered_by?: XOR<ClassLeaderScalarRelationFilter, ClassLeaderWhereInput>
  }, "id">

  export type DisciplineCaseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    action?: SortOrder
    incident_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: DisciplineCaseCountOrderByAggregateInput
    _avg?: DisciplineCaseAvgOrderByAggregateInput
    _max?: DisciplineCaseMaxOrderByAggregateInput
    _min?: DisciplineCaseMinOrderByAggregateInput
    _sum?: DisciplineCaseSumOrderByAggregateInput
  }

  export type DisciplineCaseScalarWhereWithAggregatesInput = {
    AND?: DisciplineCaseScalarWhereWithAggregatesInput | DisciplineCaseScalarWhereWithAggregatesInput[]
    OR?: DisciplineCaseScalarWhereWithAggregatesInput[]
    NOT?: DisciplineCaseScalarWhereWithAggregatesInput | DisciplineCaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DisciplineCase"> | number
    title?: StringWithAggregatesFilter<"DisciplineCase"> | string
    description?: StringWithAggregatesFilter<"DisciplineCase"> | string
    severity?: EnumDisciplineSeverityWithAggregatesFilter<"DisciplineCase"> | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionWithAggregatesFilter<"DisciplineCase"> | $Enums.DisciplineAction
    incident_date?: DateTimeWithAggregatesFilter<"DisciplineCase"> | Date | string
    student_id?: IntWithAggregatesFilter<"DisciplineCase"> | number
    registered_by_id?: IntWithAggregatesFilter<"DisciplineCase"> | number
    created_at?: DateTimeWithAggregatesFilter<"DisciplineCase"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"DisciplineCase"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"DisciplineCase"> | Date | string | null
  }

  export type ClassImpactWhereInput = {
    AND?: ClassImpactWhereInput | ClassImpactWhereInput[]
    OR?: ClassImpactWhereInput[]
    NOT?: ClassImpactWhereInput | ClassImpactWhereInput[]
    id?: IntFilter<"ClassImpact"> | number
    title?: StringFilter<"ClassImpact"> | string
    description?: StringNullableFilter<"ClassImpact"> | string | null
    type?: EnumImpactTypeFilter<"ClassImpact"> | $Enums.ImpactType
    points?: IntFilter<"ClassImpact"> | number
    impact_date?: DateTimeFilter<"ClassImpact"> | Date | string
    student_id?: IntFilter<"ClassImpact"> | number
    registered_by_id?: IntFilter<"ClassImpact"> | number
    created_at?: DateTimeFilter<"ClassImpact"> | Date | string
    updated_at?: DateTimeFilter<"ClassImpact"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ClassImpact"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    registered_by?: XOR<ClassLeaderScalarRelationFilter, ClassLeaderWhereInput>
  }

  export type ClassImpactOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    points?: SortOrder
    impact_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    registered_by?: ClassLeaderOrderByWithRelationInput
  }

  export type ClassImpactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassImpactWhereInput | ClassImpactWhereInput[]
    OR?: ClassImpactWhereInput[]
    NOT?: ClassImpactWhereInput | ClassImpactWhereInput[]
    title?: StringFilter<"ClassImpact"> | string
    description?: StringNullableFilter<"ClassImpact"> | string | null
    type?: EnumImpactTypeFilter<"ClassImpact"> | $Enums.ImpactType
    points?: IntFilter<"ClassImpact"> | number
    impact_date?: DateTimeFilter<"ClassImpact"> | Date | string
    student_id?: IntFilter<"ClassImpact"> | number
    registered_by_id?: IntFilter<"ClassImpact"> | number
    created_at?: DateTimeFilter<"ClassImpact"> | Date | string
    updated_at?: DateTimeFilter<"ClassImpact"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ClassImpact"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    registered_by?: XOR<ClassLeaderScalarRelationFilter, ClassLeaderWhereInput>
  }, "id">

  export type ClassImpactOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    points?: SortOrder
    impact_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ClassImpactCountOrderByAggregateInput
    _avg?: ClassImpactAvgOrderByAggregateInput
    _max?: ClassImpactMaxOrderByAggregateInput
    _min?: ClassImpactMinOrderByAggregateInput
    _sum?: ClassImpactSumOrderByAggregateInput
  }

  export type ClassImpactScalarWhereWithAggregatesInput = {
    AND?: ClassImpactScalarWhereWithAggregatesInput | ClassImpactScalarWhereWithAggregatesInput[]
    OR?: ClassImpactScalarWhereWithAggregatesInput[]
    NOT?: ClassImpactScalarWhereWithAggregatesInput | ClassImpactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassImpact"> | number
    title?: StringWithAggregatesFilter<"ClassImpact"> | string
    description?: StringNullableWithAggregatesFilter<"ClassImpact"> | string | null
    type?: EnumImpactTypeWithAggregatesFilter<"ClassImpact"> | $Enums.ImpactType
    points?: IntWithAggregatesFilter<"ClassImpact"> | number
    impact_date?: DateTimeWithAggregatesFilter<"ClassImpact"> | Date | string
    student_id?: IntWithAggregatesFilter<"ClassImpact"> | number
    registered_by_id?: IntWithAggregatesFilter<"ClassImpact"> | number
    created_at?: DateTimeWithAggregatesFilter<"ClassImpact"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClassImpact"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"ClassImpact"> | Date | string | null
  }

  export type CompetitionWhereInput = {
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    id?: IntFilter<"Competition"> | number
    name?: StringFilter<"Competition"> | string
    description?: StringNullableFilter<"Competition"> | string | null
    type?: EnumCompetitionTypeFilter<"Competition"> | $Enums.CompetitionType
    start_date?: DateTimeFilter<"Competition"> | Date | string
    end_date?: DateTimeNullableFilter<"Competition"> | Date | string | null
    created_at?: DateTimeFilter<"Competition"> | Date | string
    updated_at?: DateTimeFilter<"Competition"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Competition"> | Date | string | null
    participants?: CompetitionParticipantListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    participants?: CompetitionParticipantOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    name?: StringFilter<"Competition"> | string
    description?: StringNullableFilter<"Competition"> | string | null
    type?: EnumCompetitionTypeFilter<"Competition"> | $Enums.CompetitionType
    start_date?: DateTimeFilter<"Competition"> | Date | string
    end_date?: DateTimeNullableFilter<"Competition"> | Date | string | null
    created_at?: DateTimeFilter<"Competition"> | Date | string
    updated_at?: DateTimeFilter<"Competition"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Competition"> | Date | string | null
    participants?: CompetitionParticipantListRelationFilter
  }, "id">

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _avg?: CompetitionAvgOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
    _sum?: CompetitionSumOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    OR?: CompetitionScalarWhereWithAggregatesInput[]
    NOT?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Competition"> | number
    name?: StringWithAggregatesFilter<"Competition"> | string
    description?: StringNullableWithAggregatesFilter<"Competition"> | string | null
    type?: EnumCompetitionTypeWithAggregatesFilter<"Competition"> | $Enums.CompetitionType
    start_date?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"Competition"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Competition"> | Date | string | null
  }

  export type CompetitionParticipantWhereInput = {
    AND?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    OR?: CompetitionParticipantWhereInput[]
    NOT?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    id?: IntFilter<"CompetitionParticipant"> | number
    student_id?: IntFilter<"CompetitionParticipant"> | number
    competition_id?: IntFilter<"CompetitionParticipant"> | number
    position?: StringNullableFilter<"CompetitionParticipant"> | string | null
    points?: IntFilter<"CompetitionParticipant"> | number
    joined_at?: DateTimeFilter<"CompetitionParticipant"> | Date | string
    deleted_at?: DateTimeNullableFilter<"CompetitionParticipant"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
  }

  export type CompetitionParticipantOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    competition_id?: SortOrder
    position?: SortOrderInput | SortOrder
    points?: SortOrder
    joined_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    competition?: CompetitionOrderByWithRelationInput
  }

  export type CompetitionParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    student_id_competition_id?: CompetitionParticipantStudent_idCompetition_idCompoundUniqueInput
    AND?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    OR?: CompetitionParticipantWhereInput[]
    NOT?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    student_id?: IntFilter<"CompetitionParticipant"> | number
    competition_id?: IntFilter<"CompetitionParticipant"> | number
    position?: StringNullableFilter<"CompetitionParticipant"> | string | null
    points?: IntFilter<"CompetitionParticipant"> | number
    joined_at?: DateTimeFilter<"CompetitionParticipant"> | Date | string
    deleted_at?: DateTimeNullableFilter<"CompetitionParticipant"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
  }, "id" | "student_id_competition_id">

  export type CompetitionParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    competition_id?: SortOrder
    position?: SortOrderInput | SortOrder
    points?: SortOrder
    joined_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: CompetitionParticipantCountOrderByAggregateInput
    _avg?: CompetitionParticipantAvgOrderByAggregateInput
    _max?: CompetitionParticipantMaxOrderByAggregateInput
    _min?: CompetitionParticipantMinOrderByAggregateInput
    _sum?: CompetitionParticipantSumOrderByAggregateInput
  }

  export type CompetitionParticipantScalarWhereWithAggregatesInput = {
    AND?: CompetitionParticipantScalarWhereWithAggregatesInput | CompetitionParticipantScalarWhereWithAggregatesInput[]
    OR?: CompetitionParticipantScalarWhereWithAggregatesInput[]
    NOT?: CompetitionParticipantScalarWhereWithAggregatesInput | CompetitionParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompetitionParticipant"> | number
    student_id?: IntWithAggregatesFilter<"CompetitionParticipant"> | number
    competition_id?: IntWithAggregatesFilter<"CompetitionParticipant"> | number
    position?: StringNullableWithAggregatesFilter<"CompetitionParticipant"> | string | null
    points?: IntWithAggregatesFilter<"CompetitionParticipant"> | number
    joined_at?: DateTimeWithAggregatesFilter<"CompetitionParticipant"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"CompetitionParticipant"> | Date | string | null
  }

  export type StudentCreateInput = {
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantUncheckedCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentUpdateInput = {
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUncheckedUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type StudentUpdateManyMutationInput = {
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassLeaderCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutClass_leadersInput
    achievements?: AchievementCreateNestedManyWithoutRegistered_byInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderUncheckedCreateInput = {
    id?: number
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutRegistered_byInput
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutClass_leadersNestedInput
    achievements?: AchievementUpdateManyWithoutRegistered_byNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutRegistered_byNestedInput
  }

  export type ClassLeaderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutRegistered_byNestedInput
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutRegistered_byNestedInput
  }

  export type ClassLeaderCreateManyInput = {
    id?: number
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClassLeaderUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassLeaderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AchievementCreateInput = {
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutAchievementsInput
    registered_by: ClassLeaderCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    student_id: number
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AchievementUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutAchievementsNestedInput
    registered_by?: ClassLeaderUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AchievementCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    student_id: number
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AchievementUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplineCaseCreateInput = {
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutDiscipline_casesInput
    registered_by: ClassLeaderCreateNestedOneWithoutDiscipline_casesInput
  }

  export type DisciplineCaseUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    student_id: number
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DisciplineCaseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutDiscipline_casesNestedInput
    registered_by?: ClassLeaderUpdateOneRequiredWithoutDiscipline_casesNestedInput
  }

  export type DisciplineCaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplineCaseCreateManyInput = {
    id?: number
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    student_id: number
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DisciplineCaseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplineCaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassImpactCreateInput = {
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutClass_impactsInput
    registered_by: ClassLeaderCreateNestedOneWithoutClass_impactsInput
  }

  export type ClassImpactUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    student_id: number
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClassImpactUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutClass_impactsNestedInput
    registered_by?: ClassLeaderUpdateOneRequiredWithoutClass_impactsNestedInput
  }

  export type ClassImpactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassImpactCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    student_id: number
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClassImpactUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassImpactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionCreateInput = {
    name: string
    description?: string | null
    type: $Enums.CompetitionType
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    participants?: CompetitionParticipantCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    type: $Enums.CompetitionType
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    participants?: CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: CompetitionParticipantUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: CompetitionParticipantUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    type: $Enums.CompetitionType
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantCreateInput = {
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutCompetitionsInput
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
  }

  export type CompetitionParticipantUncheckedCreateInput = {
    id?: number
    student_id: number
    competition_id: number
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionParticipantUpdateInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutCompetitionsNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantCreateManyInput = {
    id?: number
    student_id: number
    competition_id: number
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionParticipantUpdateManyMutationInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AchievementListRelationFilter = {
    every?: AchievementWhereInput
    some?: AchievementWhereInput
    none?: AchievementWhereInput
  }

  export type DisciplineCaseListRelationFilter = {
    every?: DisciplineCaseWhereInput
    some?: DisciplineCaseWhereInput
    none?: DisciplineCaseWhereInput
  }

  export type ClassImpactListRelationFilter = {
    every?: ClassImpactWhereInput
    some?: ClassImpactWhereInput
    none?: ClassImpactWhereInput
  }

  export type CompetitionParticipantListRelationFilter = {
    every?: CompetitionParticipantWhereInput
    some?: CompetitionParticipantWhereInput
    none?: CompetitionParticipantWhereInput
  }

  export type ClassLeaderNullableScalarRelationFilter = {
    is?: ClassLeaderWhereInput | null
    isNot?: ClassLeaderWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplineCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassImpactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    student_code?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    registered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    student_code?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    registered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    student_code?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    registered_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ClassLeaderCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClassLeaderAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
  }

  export type ClassLeaderMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClassLeaderMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClassLeaderSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
  }

  export type ClassLeaderScalarRelationFilter = {
    is?: ClassLeaderWhereInput
    isNot?: ClassLeaderWhereInput
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    points?: SortOrder
    achieved_at?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    points?: SortOrder
    achieved_at?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    points?: SortOrder
    achieved_at?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
  }

  export type EnumDisciplineSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineSeverity | EnumDisciplineSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineSeverityFilter<$PrismaModel> | $Enums.DisciplineSeverity
  }

  export type EnumDisciplineActionFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineAction | EnumDisciplineActionFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineActionFilter<$PrismaModel> | $Enums.DisciplineAction
  }

  export type DisciplineCaseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    action?: SortOrder
    incident_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DisciplineCaseAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
  }

  export type DisciplineCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    action?: SortOrder
    incident_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DisciplineCaseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    action?: SortOrder
    incident_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type DisciplineCaseSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
  }

  export type EnumDisciplineSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineSeverity | EnumDisciplineSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineSeverityWithAggregatesFilter<$PrismaModel> | $Enums.DisciplineSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisciplineSeverityFilter<$PrismaModel>
    _max?: NestedEnumDisciplineSeverityFilter<$PrismaModel>
  }

  export type EnumDisciplineActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineAction | EnumDisciplineActionFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineActionWithAggregatesFilter<$PrismaModel> | $Enums.DisciplineAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisciplineActionFilter<$PrismaModel>
    _max?: NestedEnumDisciplineActionFilter<$PrismaModel>
  }

  export type EnumImpactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImpactType | EnumImpactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImpactTypeFilter<$PrismaModel> | $Enums.ImpactType
  }

  export type ClassImpactCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    points?: SortOrder
    impact_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClassImpactAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
  }

  export type ClassImpactMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    points?: SortOrder
    impact_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClassImpactMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    points?: SortOrder
    impact_date?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ClassImpactSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    student_id?: SortOrder
    registered_by_id?: SortOrder
  }

  export type EnumImpactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImpactType | EnumImpactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImpactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImpactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImpactTypeFilter<$PrismaModel>
    _max?: NestedEnumImpactTypeFilter<$PrismaModel>
  }

  export type EnumCompetitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeFilter<$PrismaModel> | $Enums.CompetitionType
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CompetitionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CompetitionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCompetitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CompetitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompetitionTypeFilter<$PrismaModel>
    _max?: NestedEnumCompetitionTypeFilter<$PrismaModel>
  }

  export type CompetitionScalarRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type CompetitionParticipantStudent_idCompetition_idCompoundUniqueInput = {
    student_id: number
    competition_id: number
  }

  export type CompetitionParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    competition_id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    joined_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CompetitionParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    competition_id?: SortOrder
    points?: SortOrder
  }

  export type CompetitionParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    competition_id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    joined_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CompetitionParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    competition_id?: SortOrder
    position?: SortOrder
    points?: SortOrder
    joined_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CompetitionParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    competition_id?: SortOrder
    points?: SortOrder
  }

  export type AchievementCreateNestedManyWithoutStudentInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type DisciplineCaseCreateNestedManyWithoutStudentInput = {
    create?: XOR<DisciplineCaseCreateWithoutStudentInput, DisciplineCaseUncheckedCreateWithoutStudentInput> | DisciplineCaseCreateWithoutStudentInput[] | DisciplineCaseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutStudentInput | DisciplineCaseCreateOrConnectWithoutStudentInput[]
    createMany?: DisciplineCaseCreateManyStudentInputEnvelope
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
  }

  export type ClassImpactCreateNestedManyWithoutStudentInput = {
    create?: XOR<ClassImpactCreateWithoutStudentInput, ClassImpactUncheckedCreateWithoutStudentInput> | ClassImpactCreateWithoutStudentInput[] | ClassImpactUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutStudentInput | ClassImpactCreateOrConnectWithoutStudentInput[]
    createMany?: ClassImpactCreateManyStudentInputEnvelope
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
  }

  export type CompetitionParticipantCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompetitionParticipantCreateWithoutStudentInput, CompetitionParticipantUncheckedCreateWithoutStudentInput> | CompetitionParticipantCreateWithoutStudentInput[] | CompetitionParticipantUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutStudentInput | CompetitionParticipantCreateOrConnectWithoutStudentInput[]
    createMany?: CompetitionParticipantCreateManyStudentInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type ClassLeaderCreateNestedOneWithoutStudentInput = {
    create?: XOR<ClassLeaderCreateWithoutStudentInput, ClassLeaderUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutStudentInput
    connect?: ClassLeaderWhereUniqueInput
  }

  export type AchievementUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type DisciplineCaseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<DisciplineCaseCreateWithoutStudentInput, DisciplineCaseUncheckedCreateWithoutStudentInput> | DisciplineCaseCreateWithoutStudentInput[] | DisciplineCaseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutStudentInput | DisciplineCaseCreateOrConnectWithoutStudentInput[]
    createMany?: DisciplineCaseCreateManyStudentInputEnvelope
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
  }

  export type ClassImpactUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ClassImpactCreateWithoutStudentInput, ClassImpactUncheckedCreateWithoutStudentInput> | ClassImpactCreateWithoutStudentInput[] | ClassImpactUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutStudentInput | ClassImpactCreateOrConnectWithoutStudentInput[]
    createMany?: ClassImpactCreateManyStudentInputEnvelope
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
  }

  export type CompetitionParticipantUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompetitionParticipantCreateWithoutStudentInput, CompetitionParticipantUncheckedCreateWithoutStudentInput> | CompetitionParticipantCreateWithoutStudentInput[] | CompetitionParticipantUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutStudentInput | CompetitionParticipantCreateOrConnectWithoutStudentInput[]
    createMany?: CompetitionParticipantCreateManyStudentInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type ClassLeaderUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<ClassLeaderCreateWithoutStudentInput, ClassLeaderUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutStudentInput
    connect?: ClassLeaderWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStudentStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AchievementUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutStudentInput | AchievementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutStudentInput | AchievementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutStudentInput | AchievementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type DisciplineCaseUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DisciplineCaseCreateWithoutStudentInput, DisciplineCaseUncheckedCreateWithoutStudentInput> | DisciplineCaseCreateWithoutStudentInput[] | DisciplineCaseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutStudentInput | DisciplineCaseCreateOrConnectWithoutStudentInput[]
    upsert?: DisciplineCaseUpsertWithWhereUniqueWithoutStudentInput | DisciplineCaseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DisciplineCaseCreateManyStudentInputEnvelope
    set?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    disconnect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    delete?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    update?: DisciplineCaseUpdateWithWhereUniqueWithoutStudentInput | DisciplineCaseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DisciplineCaseUpdateManyWithWhereWithoutStudentInput | DisciplineCaseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DisciplineCaseScalarWhereInput | DisciplineCaseScalarWhereInput[]
  }

  export type ClassImpactUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ClassImpactCreateWithoutStudentInput, ClassImpactUncheckedCreateWithoutStudentInput> | ClassImpactCreateWithoutStudentInput[] | ClassImpactUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutStudentInput | ClassImpactCreateOrConnectWithoutStudentInput[]
    upsert?: ClassImpactUpsertWithWhereUniqueWithoutStudentInput | ClassImpactUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ClassImpactCreateManyStudentInputEnvelope
    set?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    disconnect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    delete?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    update?: ClassImpactUpdateWithWhereUniqueWithoutStudentInput | ClassImpactUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ClassImpactUpdateManyWithWhereWithoutStudentInput | ClassImpactUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ClassImpactScalarWhereInput | ClassImpactScalarWhereInput[]
  }

  export type CompetitionParticipantUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutStudentInput, CompetitionParticipantUncheckedCreateWithoutStudentInput> | CompetitionParticipantCreateWithoutStudentInput[] | CompetitionParticipantUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutStudentInput | CompetitionParticipantCreateOrConnectWithoutStudentInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutStudentInput | CompetitionParticipantUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompetitionParticipantCreateManyStudentInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutStudentInput | CompetitionParticipantUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutStudentInput | CompetitionParticipantUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type ClassLeaderUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ClassLeaderCreateWithoutStudentInput, ClassLeaderUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutStudentInput
    upsert?: ClassLeaderUpsertWithoutStudentInput
    disconnect?: ClassLeaderWhereInput | boolean
    delete?: ClassLeaderWhereInput | boolean
    connect?: ClassLeaderWhereUniqueInput
    update?: XOR<XOR<ClassLeaderUpdateToOneWithWhereWithoutStudentInput, ClassLeaderUpdateWithoutStudentInput>, ClassLeaderUncheckedUpdateWithoutStudentInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AchievementUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput> | AchievementCreateWithoutStudentInput[] | AchievementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutStudentInput | AchievementCreateOrConnectWithoutStudentInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutStudentInput | AchievementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AchievementCreateManyStudentInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutStudentInput | AchievementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutStudentInput | AchievementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type DisciplineCaseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DisciplineCaseCreateWithoutStudentInput, DisciplineCaseUncheckedCreateWithoutStudentInput> | DisciplineCaseCreateWithoutStudentInput[] | DisciplineCaseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutStudentInput | DisciplineCaseCreateOrConnectWithoutStudentInput[]
    upsert?: DisciplineCaseUpsertWithWhereUniqueWithoutStudentInput | DisciplineCaseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DisciplineCaseCreateManyStudentInputEnvelope
    set?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    disconnect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    delete?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    update?: DisciplineCaseUpdateWithWhereUniqueWithoutStudentInput | DisciplineCaseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DisciplineCaseUpdateManyWithWhereWithoutStudentInput | DisciplineCaseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DisciplineCaseScalarWhereInput | DisciplineCaseScalarWhereInput[]
  }

  export type ClassImpactUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ClassImpactCreateWithoutStudentInput, ClassImpactUncheckedCreateWithoutStudentInput> | ClassImpactCreateWithoutStudentInput[] | ClassImpactUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutStudentInput | ClassImpactCreateOrConnectWithoutStudentInput[]
    upsert?: ClassImpactUpsertWithWhereUniqueWithoutStudentInput | ClassImpactUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ClassImpactCreateManyStudentInputEnvelope
    set?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    disconnect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    delete?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    update?: ClassImpactUpdateWithWhereUniqueWithoutStudentInput | ClassImpactUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ClassImpactUpdateManyWithWhereWithoutStudentInput | ClassImpactUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ClassImpactScalarWhereInput | ClassImpactScalarWhereInput[]
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutStudentInput, CompetitionParticipantUncheckedCreateWithoutStudentInput> | CompetitionParticipantCreateWithoutStudentInput[] | CompetitionParticipantUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutStudentInput | CompetitionParticipantCreateOrConnectWithoutStudentInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutStudentInput | CompetitionParticipantUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompetitionParticipantCreateManyStudentInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutStudentInput | CompetitionParticipantUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutStudentInput | CompetitionParticipantUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type ClassLeaderUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ClassLeaderCreateWithoutStudentInput, ClassLeaderUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutStudentInput
    upsert?: ClassLeaderUpsertWithoutStudentInput
    disconnect?: ClassLeaderWhereInput | boolean
    delete?: ClassLeaderWhereInput | boolean
    connect?: ClassLeaderWhereUniqueInput
    update?: XOR<XOR<ClassLeaderUpdateToOneWithWhereWithoutStudentInput, ClassLeaderUpdateWithoutStudentInput>, ClassLeaderUncheckedUpdateWithoutStudentInput>
  }

  export type StudentCreateNestedOneWithoutClass_leadersInput = {
    create?: XOR<StudentCreateWithoutClass_leadersInput, StudentUncheckedCreateWithoutClass_leadersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClass_leadersInput
    connect?: StudentWhereUniqueInput
  }

  export type AchievementCreateNestedManyWithoutRegistered_byInput = {
    create?: XOR<AchievementCreateWithoutRegistered_byInput, AchievementUncheckedCreateWithoutRegistered_byInput> | AchievementCreateWithoutRegistered_byInput[] | AchievementUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutRegistered_byInput | AchievementCreateOrConnectWithoutRegistered_byInput[]
    createMany?: AchievementCreateManyRegistered_byInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type DisciplineCaseCreateNestedManyWithoutRegistered_byInput = {
    create?: XOR<DisciplineCaseCreateWithoutRegistered_byInput, DisciplineCaseUncheckedCreateWithoutRegistered_byInput> | DisciplineCaseCreateWithoutRegistered_byInput[] | DisciplineCaseUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutRegistered_byInput | DisciplineCaseCreateOrConnectWithoutRegistered_byInput[]
    createMany?: DisciplineCaseCreateManyRegistered_byInputEnvelope
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
  }

  export type ClassImpactCreateNestedManyWithoutRegistered_byInput = {
    create?: XOR<ClassImpactCreateWithoutRegistered_byInput, ClassImpactUncheckedCreateWithoutRegistered_byInput> | ClassImpactCreateWithoutRegistered_byInput[] | ClassImpactUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutRegistered_byInput | ClassImpactCreateOrConnectWithoutRegistered_byInput[]
    createMany?: ClassImpactCreateManyRegistered_byInputEnvelope
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
  }

  export type AchievementUncheckedCreateNestedManyWithoutRegistered_byInput = {
    create?: XOR<AchievementCreateWithoutRegistered_byInput, AchievementUncheckedCreateWithoutRegistered_byInput> | AchievementCreateWithoutRegistered_byInput[] | AchievementUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutRegistered_byInput | AchievementCreateOrConnectWithoutRegistered_byInput[]
    createMany?: AchievementCreateManyRegistered_byInputEnvelope
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
  }

  export type DisciplineCaseUncheckedCreateNestedManyWithoutRegistered_byInput = {
    create?: XOR<DisciplineCaseCreateWithoutRegistered_byInput, DisciplineCaseUncheckedCreateWithoutRegistered_byInput> | DisciplineCaseCreateWithoutRegistered_byInput[] | DisciplineCaseUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutRegistered_byInput | DisciplineCaseCreateOrConnectWithoutRegistered_byInput[]
    createMany?: DisciplineCaseCreateManyRegistered_byInputEnvelope
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
  }

  export type ClassImpactUncheckedCreateNestedManyWithoutRegistered_byInput = {
    create?: XOR<ClassImpactCreateWithoutRegistered_byInput, ClassImpactUncheckedCreateWithoutRegistered_byInput> | ClassImpactCreateWithoutRegistered_byInput[] | ClassImpactUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutRegistered_byInput | ClassImpactCreateOrConnectWithoutRegistered_byInput[]
    createMany?: ClassImpactCreateManyRegistered_byInputEnvelope
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutClass_leadersNestedInput = {
    create?: XOR<StudentCreateWithoutClass_leadersInput, StudentUncheckedCreateWithoutClass_leadersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClass_leadersInput
    upsert?: StudentUpsertWithoutClass_leadersInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutClass_leadersInput, StudentUpdateWithoutClass_leadersInput>, StudentUncheckedUpdateWithoutClass_leadersInput>
  }

  export type AchievementUpdateManyWithoutRegistered_byNestedInput = {
    create?: XOR<AchievementCreateWithoutRegistered_byInput, AchievementUncheckedCreateWithoutRegistered_byInput> | AchievementCreateWithoutRegistered_byInput[] | AchievementUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutRegistered_byInput | AchievementCreateOrConnectWithoutRegistered_byInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutRegistered_byInput | AchievementUpsertWithWhereUniqueWithoutRegistered_byInput[]
    createMany?: AchievementCreateManyRegistered_byInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutRegistered_byInput | AchievementUpdateWithWhereUniqueWithoutRegistered_byInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutRegistered_byInput | AchievementUpdateManyWithWhereWithoutRegistered_byInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type DisciplineCaseUpdateManyWithoutRegistered_byNestedInput = {
    create?: XOR<DisciplineCaseCreateWithoutRegistered_byInput, DisciplineCaseUncheckedCreateWithoutRegistered_byInput> | DisciplineCaseCreateWithoutRegistered_byInput[] | DisciplineCaseUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutRegistered_byInput | DisciplineCaseCreateOrConnectWithoutRegistered_byInput[]
    upsert?: DisciplineCaseUpsertWithWhereUniqueWithoutRegistered_byInput | DisciplineCaseUpsertWithWhereUniqueWithoutRegistered_byInput[]
    createMany?: DisciplineCaseCreateManyRegistered_byInputEnvelope
    set?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    disconnect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    delete?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    update?: DisciplineCaseUpdateWithWhereUniqueWithoutRegistered_byInput | DisciplineCaseUpdateWithWhereUniqueWithoutRegistered_byInput[]
    updateMany?: DisciplineCaseUpdateManyWithWhereWithoutRegistered_byInput | DisciplineCaseUpdateManyWithWhereWithoutRegistered_byInput[]
    deleteMany?: DisciplineCaseScalarWhereInput | DisciplineCaseScalarWhereInput[]
  }

  export type ClassImpactUpdateManyWithoutRegistered_byNestedInput = {
    create?: XOR<ClassImpactCreateWithoutRegistered_byInput, ClassImpactUncheckedCreateWithoutRegistered_byInput> | ClassImpactCreateWithoutRegistered_byInput[] | ClassImpactUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutRegistered_byInput | ClassImpactCreateOrConnectWithoutRegistered_byInput[]
    upsert?: ClassImpactUpsertWithWhereUniqueWithoutRegistered_byInput | ClassImpactUpsertWithWhereUniqueWithoutRegistered_byInput[]
    createMany?: ClassImpactCreateManyRegistered_byInputEnvelope
    set?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    disconnect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    delete?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    update?: ClassImpactUpdateWithWhereUniqueWithoutRegistered_byInput | ClassImpactUpdateWithWhereUniqueWithoutRegistered_byInput[]
    updateMany?: ClassImpactUpdateManyWithWhereWithoutRegistered_byInput | ClassImpactUpdateManyWithWhereWithoutRegistered_byInput[]
    deleteMany?: ClassImpactScalarWhereInput | ClassImpactScalarWhereInput[]
  }

  export type AchievementUncheckedUpdateManyWithoutRegistered_byNestedInput = {
    create?: XOR<AchievementCreateWithoutRegistered_byInput, AchievementUncheckedCreateWithoutRegistered_byInput> | AchievementCreateWithoutRegistered_byInput[] | AchievementUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: AchievementCreateOrConnectWithoutRegistered_byInput | AchievementCreateOrConnectWithoutRegistered_byInput[]
    upsert?: AchievementUpsertWithWhereUniqueWithoutRegistered_byInput | AchievementUpsertWithWhereUniqueWithoutRegistered_byInput[]
    createMany?: AchievementCreateManyRegistered_byInputEnvelope
    set?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    disconnect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    delete?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    connect?: AchievementWhereUniqueInput | AchievementWhereUniqueInput[]
    update?: AchievementUpdateWithWhereUniqueWithoutRegistered_byInput | AchievementUpdateWithWhereUniqueWithoutRegistered_byInput[]
    updateMany?: AchievementUpdateManyWithWhereWithoutRegistered_byInput | AchievementUpdateManyWithWhereWithoutRegistered_byInput[]
    deleteMany?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
  }

  export type DisciplineCaseUncheckedUpdateManyWithoutRegistered_byNestedInput = {
    create?: XOR<DisciplineCaseCreateWithoutRegistered_byInput, DisciplineCaseUncheckedCreateWithoutRegistered_byInput> | DisciplineCaseCreateWithoutRegistered_byInput[] | DisciplineCaseUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: DisciplineCaseCreateOrConnectWithoutRegistered_byInput | DisciplineCaseCreateOrConnectWithoutRegistered_byInput[]
    upsert?: DisciplineCaseUpsertWithWhereUniqueWithoutRegistered_byInput | DisciplineCaseUpsertWithWhereUniqueWithoutRegistered_byInput[]
    createMany?: DisciplineCaseCreateManyRegistered_byInputEnvelope
    set?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    disconnect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    delete?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    connect?: DisciplineCaseWhereUniqueInput | DisciplineCaseWhereUniqueInput[]
    update?: DisciplineCaseUpdateWithWhereUniqueWithoutRegistered_byInput | DisciplineCaseUpdateWithWhereUniqueWithoutRegistered_byInput[]
    updateMany?: DisciplineCaseUpdateManyWithWhereWithoutRegistered_byInput | DisciplineCaseUpdateManyWithWhereWithoutRegistered_byInput[]
    deleteMany?: DisciplineCaseScalarWhereInput | DisciplineCaseScalarWhereInput[]
  }

  export type ClassImpactUncheckedUpdateManyWithoutRegistered_byNestedInput = {
    create?: XOR<ClassImpactCreateWithoutRegistered_byInput, ClassImpactUncheckedCreateWithoutRegistered_byInput> | ClassImpactCreateWithoutRegistered_byInput[] | ClassImpactUncheckedCreateWithoutRegistered_byInput[]
    connectOrCreate?: ClassImpactCreateOrConnectWithoutRegistered_byInput | ClassImpactCreateOrConnectWithoutRegistered_byInput[]
    upsert?: ClassImpactUpsertWithWhereUniqueWithoutRegistered_byInput | ClassImpactUpsertWithWhereUniqueWithoutRegistered_byInput[]
    createMany?: ClassImpactCreateManyRegistered_byInputEnvelope
    set?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    disconnect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    delete?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    connect?: ClassImpactWhereUniqueInput | ClassImpactWhereUniqueInput[]
    update?: ClassImpactUpdateWithWhereUniqueWithoutRegistered_byInput | ClassImpactUpdateWithWhereUniqueWithoutRegistered_byInput[]
    updateMany?: ClassImpactUpdateManyWithWhereWithoutRegistered_byInput | ClassImpactUpdateManyWithWhereWithoutRegistered_byInput[]
    deleteMany?: ClassImpactScalarWhereInput | ClassImpactScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAchievementsInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassLeaderCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<ClassLeaderCreateWithoutAchievementsInput, ClassLeaderUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutAchievementsInput
    connect?: ClassLeaderWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAchievementTypeFieldUpdateOperationsInput = {
    set?: $Enums.AchievementType
  }

  export type StudentUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAchievementsInput
    upsert?: StudentUpsertWithoutAchievementsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAchievementsInput, StudentUpdateWithoutAchievementsInput>, StudentUncheckedUpdateWithoutAchievementsInput>
  }

  export type ClassLeaderUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<ClassLeaderCreateWithoutAchievementsInput, ClassLeaderUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutAchievementsInput
    upsert?: ClassLeaderUpsertWithoutAchievementsInput
    connect?: ClassLeaderWhereUniqueInput
    update?: XOR<XOR<ClassLeaderUpdateToOneWithWhereWithoutAchievementsInput, ClassLeaderUpdateWithoutAchievementsInput>, ClassLeaderUncheckedUpdateWithoutAchievementsInput>
  }

  export type StudentCreateNestedOneWithoutDiscipline_casesInput = {
    create?: XOR<StudentCreateWithoutDiscipline_casesInput, StudentUncheckedCreateWithoutDiscipline_casesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDiscipline_casesInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassLeaderCreateNestedOneWithoutDiscipline_casesInput = {
    create?: XOR<ClassLeaderCreateWithoutDiscipline_casesInput, ClassLeaderUncheckedCreateWithoutDiscipline_casesInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutDiscipline_casesInput
    connect?: ClassLeaderWhereUniqueInput
  }

  export type EnumDisciplineSeverityFieldUpdateOperationsInput = {
    set?: $Enums.DisciplineSeverity
  }

  export type EnumDisciplineActionFieldUpdateOperationsInput = {
    set?: $Enums.DisciplineAction
  }

  export type StudentUpdateOneRequiredWithoutDiscipline_casesNestedInput = {
    create?: XOR<StudentCreateWithoutDiscipline_casesInput, StudentUncheckedCreateWithoutDiscipline_casesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDiscipline_casesInput
    upsert?: StudentUpsertWithoutDiscipline_casesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutDiscipline_casesInput, StudentUpdateWithoutDiscipline_casesInput>, StudentUncheckedUpdateWithoutDiscipline_casesInput>
  }

  export type ClassLeaderUpdateOneRequiredWithoutDiscipline_casesNestedInput = {
    create?: XOR<ClassLeaderCreateWithoutDiscipline_casesInput, ClassLeaderUncheckedCreateWithoutDiscipline_casesInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutDiscipline_casesInput
    upsert?: ClassLeaderUpsertWithoutDiscipline_casesInput
    connect?: ClassLeaderWhereUniqueInput
    update?: XOR<XOR<ClassLeaderUpdateToOneWithWhereWithoutDiscipline_casesInput, ClassLeaderUpdateWithoutDiscipline_casesInput>, ClassLeaderUncheckedUpdateWithoutDiscipline_casesInput>
  }

  export type StudentCreateNestedOneWithoutClass_impactsInput = {
    create?: XOR<StudentCreateWithoutClass_impactsInput, StudentUncheckedCreateWithoutClass_impactsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClass_impactsInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassLeaderCreateNestedOneWithoutClass_impactsInput = {
    create?: XOR<ClassLeaderCreateWithoutClass_impactsInput, ClassLeaderUncheckedCreateWithoutClass_impactsInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutClass_impactsInput
    connect?: ClassLeaderWhereUniqueInput
  }

  export type EnumImpactTypeFieldUpdateOperationsInput = {
    set?: $Enums.ImpactType
  }

  export type StudentUpdateOneRequiredWithoutClass_impactsNestedInput = {
    create?: XOR<StudentCreateWithoutClass_impactsInput, StudentUncheckedCreateWithoutClass_impactsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutClass_impactsInput
    upsert?: StudentUpsertWithoutClass_impactsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutClass_impactsInput, StudentUpdateWithoutClass_impactsInput>, StudentUncheckedUpdateWithoutClass_impactsInput>
  }

  export type ClassLeaderUpdateOneRequiredWithoutClass_impactsNestedInput = {
    create?: XOR<ClassLeaderCreateWithoutClass_impactsInput, ClassLeaderUncheckedCreateWithoutClass_impactsInput>
    connectOrCreate?: ClassLeaderCreateOrConnectWithoutClass_impactsInput
    upsert?: ClassLeaderUpsertWithoutClass_impactsInput
    connect?: ClassLeaderWhereUniqueInput
    update?: XOR<XOR<ClassLeaderUpdateToOneWithWhereWithoutClass_impactsInput, ClassLeaderUpdateWithoutClass_impactsInput>, ClassLeaderUncheckedUpdateWithoutClass_impactsInput>
  }

  export type CompetitionParticipantCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type EnumCompetitionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CompetitionType
  }

  export type CompetitionParticipantUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput | CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput | CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutCompetitionsInput = {
    create?: XOR<StudentCreateWithoutCompetitionsInput, StudentUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCompetitionsInput
    connect?: StudentWhereUniqueInput
  }

  export type CompetitionCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput
    connect?: CompetitionWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutCompetitionsNestedInput = {
    create?: XOR<StudentCreateWithoutCompetitionsInput, StudentUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCompetitionsInput
    upsert?: StudentUpsertWithoutCompetitionsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCompetitionsInput, StudentUpdateWithoutCompetitionsInput>, StudentUncheckedUpdateWithoutCompetitionsInput>
  }

  export type CompetitionUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput
    upsert?: CompetitionUpsertWithoutParticipantsInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutParticipantsInput, CompetitionUpdateWithoutParticipantsInput>, CompetitionUncheckedUpdateWithoutParticipantsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
  }

  export type NestedEnumDisciplineSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineSeverity | EnumDisciplineSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineSeverityFilter<$PrismaModel> | $Enums.DisciplineSeverity
  }

  export type NestedEnumDisciplineActionFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineAction | EnumDisciplineActionFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineActionFilter<$PrismaModel> | $Enums.DisciplineAction
  }

  export type NestedEnumDisciplineSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineSeverity | EnumDisciplineSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineSeverity[] | ListEnumDisciplineSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineSeverityWithAggregatesFilter<$PrismaModel> | $Enums.DisciplineSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisciplineSeverityFilter<$PrismaModel>
    _max?: NestedEnumDisciplineSeverityFilter<$PrismaModel>
  }

  export type NestedEnumDisciplineActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisciplineAction | EnumDisciplineActionFieldRefInput<$PrismaModel>
    in?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisciplineAction[] | ListEnumDisciplineActionFieldRefInput<$PrismaModel>
    not?: NestedEnumDisciplineActionWithAggregatesFilter<$PrismaModel> | $Enums.DisciplineAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisciplineActionFilter<$PrismaModel>
    _max?: NestedEnumDisciplineActionFilter<$PrismaModel>
  }

  export type NestedEnumImpactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImpactType | EnumImpactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImpactTypeFilter<$PrismaModel> | $Enums.ImpactType
  }

  export type NestedEnumImpactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImpactType | EnumImpactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImpactType[] | ListEnumImpactTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImpactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImpactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImpactTypeFilter<$PrismaModel>
    _max?: NestedEnumImpactTypeFilter<$PrismaModel>
  }

  export type NestedEnumCompetitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeFilter<$PrismaModel> | $Enums.CompetitionType
  }

  export type NestedEnumCompetitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompetitionType | EnumCompetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompetitionType[] | ListEnumCompetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompetitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CompetitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompetitionTypeFilter<$PrismaModel>
    _max?: NestedEnumCompetitionTypeFilter<$PrismaModel>
  }

  export type AchievementCreateWithoutStudentInput = {
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    registered_by: ClassLeaderCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateWithoutStudentInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AchievementCreateOrConnectWithoutStudentInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput>
  }

  export type AchievementCreateManyStudentInputEnvelope = {
    data: AchievementCreateManyStudentInput | AchievementCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type DisciplineCaseCreateWithoutStudentInput = {
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    registered_by: ClassLeaderCreateNestedOneWithoutDiscipline_casesInput
  }

  export type DisciplineCaseUncheckedCreateWithoutStudentInput = {
    id?: number
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DisciplineCaseCreateOrConnectWithoutStudentInput = {
    where: DisciplineCaseWhereUniqueInput
    create: XOR<DisciplineCaseCreateWithoutStudentInput, DisciplineCaseUncheckedCreateWithoutStudentInput>
  }

  export type DisciplineCaseCreateManyStudentInputEnvelope = {
    data: DisciplineCaseCreateManyStudentInput | DisciplineCaseCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassImpactCreateWithoutStudentInput = {
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    registered_by: ClassLeaderCreateNestedOneWithoutClass_impactsInput
  }

  export type ClassImpactUncheckedCreateWithoutStudentInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClassImpactCreateOrConnectWithoutStudentInput = {
    where: ClassImpactWhereUniqueInput
    create: XOR<ClassImpactCreateWithoutStudentInput, ClassImpactUncheckedCreateWithoutStudentInput>
  }

  export type ClassImpactCreateManyStudentInputEnvelope = {
    data: ClassImpactCreateManyStudentInput | ClassImpactCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionParticipantCreateWithoutStudentInput = {
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
  }

  export type CompetitionParticipantUncheckedCreateWithoutStudentInput = {
    id?: number
    competition_id: number
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionParticipantCreateOrConnectWithoutStudentInput = {
    where: CompetitionParticipantWhereUniqueInput
    create: XOR<CompetitionParticipantCreateWithoutStudentInput, CompetitionParticipantUncheckedCreateWithoutStudentInput>
  }

  export type CompetitionParticipantCreateManyStudentInputEnvelope = {
    data: CompetitionParticipantCreateManyStudentInput | CompetitionParticipantCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassLeaderCreateWithoutStudentInput = {
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementCreateNestedManyWithoutRegistered_byInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderUncheckedCreateWithoutStudentInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutRegistered_byInput
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderCreateOrConnectWithoutStudentInput = {
    where: ClassLeaderWhereUniqueInput
    create: XOR<ClassLeaderCreateWithoutStudentInput, ClassLeaderUncheckedCreateWithoutStudentInput>
  }

  export type AchievementUpsertWithWhereUniqueWithoutStudentInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutStudentInput, AchievementUncheckedUpdateWithoutStudentInput>
    create: XOR<AchievementCreateWithoutStudentInput, AchievementUncheckedCreateWithoutStudentInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutStudentInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutStudentInput, AchievementUncheckedUpdateWithoutStudentInput>
  }

  export type AchievementUpdateManyWithWhereWithoutStudentInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutStudentInput>
  }

  export type AchievementScalarWhereInput = {
    AND?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    OR?: AchievementScalarWhereInput[]
    NOT?: AchievementScalarWhereInput | AchievementScalarWhereInput[]
    id?: IntFilter<"Achievement"> | number
    title?: StringFilter<"Achievement"> | string
    description?: StringNullableFilter<"Achievement"> | string | null
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    points?: IntFilter<"Achievement"> | number
    achieved_at?: DateTimeFilter<"Achievement"> | Date | string
    student_id?: IntFilter<"Achievement"> | number
    registered_by_id?: IntFilter<"Achievement"> | number
    created_at?: DateTimeFilter<"Achievement"> | Date | string
    updated_at?: DateTimeFilter<"Achievement"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Achievement"> | Date | string | null
  }

  export type DisciplineCaseUpsertWithWhereUniqueWithoutStudentInput = {
    where: DisciplineCaseWhereUniqueInput
    update: XOR<DisciplineCaseUpdateWithoutStudentInput, DisciplineCaseUncheckedUpdateWithoutStudentInput>
    create: XOR<DisciplineCaseCreateWithoutStudentInput, DisciplineCaseUncheckedCreateWithoutStudentInput>
  }

  export type DisciplineCaseUpdateWithWhereUniqueWithoutStudentInput = {
    where: DisciplineCaseWhereUniqueInput
    data: XOR<DisciplineCaseUpdateWithoutStudentInput, DisciplineCaseUncheckedUpdateWithoutStudentInput>
  }

  export type DisciplineCaseUpdateManyWithWhereWithoutStudentInput = {
    where: DisciplineCaseScalarWhereInput
    data: XOR<DisciplineCaseUpdateManyMutationInput, DisciplineCaseUncheckedUpdateManyWithoutStudentInput>
  }

  export type DisciplineCaseScalarWhereInput = {
    AND?: DisciplineCaseScalarWhereInput | DisciplineCaseScalarWhereInput[]
    OR?: DisciplineCaseScalarWhereInput[]
    NOT?: DisciplineCaseScalarWhereInput | DisciplineCaseScalarWhereInput[]
    id?: IntFilter<"DisciplineCase"> | number
    title?: StringFilter<"DisciplineCase"> | string
    description?: StringFilter<"DisciplineCase"> | string
    severity?: EnumDisciplineSeverityFilter<"DisciplineCase"> | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFilter<"DisciplineCase"> | $Enums.DisciplineAction
    incident_date?: DateTimeFilter<"DisciplineCase"> | Date | string
    student_id?: IntFilter<"DisciplineCase"> | number
    registered_by_id?: IntFilter<"DisciplineCase"> | number
    created_at?: DateTimeFilter<"DisciplineCase"> | Date | string
    updated_at?: DateTimeFilter<"DisciplineCase"> | Date | string
    deleted_at?: DateTimeNullableFilter<"DisciplineCase"> | Date | string | null
  }

  export type ClassImpactUpsertWithWhereUniqueWithoutStudentInput = {
    where: ClassImpactWhereUniqueInput
    update: XOR<ClassImpactUpdateWithoutStudentInput, ClassImpactUncheckedUpdateWithoutStudentInput>
    create: XOR<ClassImpactCreateWithoutStudentInput, ClassImpactUncheckedCreateWithoutStudentInput>
  }

  export type ClassImpactUpdateWithWhereUniqueWithoutStudentInput = {
    where: ClassImpactWhereUniqueInput
    data: XOR<ClassImpactUpdateWithoutStudentInput, ClassImpactUncheckedUpdateWithoutStudentInput>
  }

  export type ClassImpactUpdateManyWithWhereWithoutStudentInput = {
    where: ClassImpactScalarWhereInput
    data: XOR<ClassImpactUpdateManyMutationInput, ClassImpactUncheckedUpdateManyWithoutStudentInput>
  }

  export type ClassImpactScalarWhereInput = {
    AND?: ClassImpactScalarWhereInput | ClassImpactScalarWhereInput[]
    OR?: ClassImpactScalarWhereInput[]
    NOT?: ClassImpactScalarWhereInput | ClassImpactScalarWhereInput[]
    id?: IntFilter<"ClassImpact"> | number
    title?: StringFilter<"ClassImpact"> | string
    description?: StringNullableFilter<"ClassImpact"> | string | null
    type?: EnumImpactTypeFilter<"ClassImpact"> | $Enums.ImpactType
    points?: IntFilter<"ClassImpact"> | number
    impact_date?: DateTimeFilter<"ClassImpact"> | Date | string
    student_id?: IntFilter<"ClassImpact"> | number
    registered_by_id?: IntFilter<"ClassImpact"> | number
    created_at?: DateTimeFilter<"ClassImpact"> | Date | string
    updated_at?: DateTimeFilter<"ClassImpact"> | Date | string
    deleted_at?: DateTimeNullableFilter<"ClassImpact"> | Date | string | null
  }

  export type CompetitionParticipantUpsertWithWhereUniqueWithoutStudentInput = {
    where: CompetitionParticipantWhereUniqueInput
    update: XOR<CompetitionParticipantUpdateWithoutStudentInput, CompetitionParticipantUncheckedUpdateWithoutStudentInput>
    create: XOR<CompetitionParticipantCreateWithoutStudentInput, CompetitionParticipantUncheckedCreateWithoutStudentInput>
  }

  export type CompetitionParticipantUpdateWithWhereUniqueWithoutStudentInput = {
    where: CompetitionParticipantWhereUniqueInput
    data: XOR<CompetitionParticipantUpdateWithoutStudentInput, CompetitionParticipantUncheckedUpdateWithoutStudentInput>
  }

  export type CompetitionParticipantUpdateManyWithWhereWithoutStudentInput = {
    where: CompetitionParticipantScalarWhereInput
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyWithoutStudentInput>
  }

  export type CompetitionParticipantScalarWhereInput = {
    AND?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
    OR?: CompetitionParticipantScalarWhereInput[]
    NOT?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
    id?: IntFilter<"CompetitionParticipant"> | number
    student_id?: IntFilter<"CompetitionParticipant"> | number
    competition_id?: IntFilter<"CompetitionParticipant"> | number
    position?: StringNullableFilter<"CompetitionParticipant"> | string | null
    points?: IntFilter<"CompetitionParticipant"> | number
    joined_at?: DateTimeFilter<"CompetitionParticipant"> | Date | string
    deleted_at?: DateTimeNullableFilter<"CompetitionParticipant"> | Date | string | null
  }

  export type ClassLeaderUpsertWithoutStudentInput = {
    update: XOR<ClassLeaderUpdateWithoutStudentInput, ClassLeaderUncheckedUpdateWithoutStudentInput>
    create: XOR<ClassLeaderCreateWithoutStudentInput, ClassLeaderUncheckedCreateWithoutStudentInput>
    where?: ClassLeaderWhereInput
  }

  export type ClassLeaderUpdateToOneWithWhereWithoutStudentInput = {
    where?: ClassLeaderWhereInput
    data: XOR<ClassLeaderUpdateWithoutStudentInput, ClassLeaderUncheckedUpdateWithoutStudentInput>
  }

  export type ClassLeaderUpdateWithoutStudentInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUpdateManyWithoutRegistered_byNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutRegistered_byNestedInput
  }

  export type ClassLeaderUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutRegistered_byNestedInput
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutRegistered_byNestedInput
  }

  export type StudentCreateWithoutClass_leadersInput = {
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClass_leadersInput = {
    id?: number
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClass_leadersInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClass_leadersInput, StudentUncheckedCreateWithoutClass_leadersInput>
  }

  export type AchievementCreateWithoutRegistered_byInput = {
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutAchievementsInput
  }

  export type AchievementUncheckedCreateWithoutRegistered_byInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AchievementCreateOrConnectWithoutRegistered_byInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutRegistered_byInput, AchievementUncheckedCreateWithoutRegistered_byInput>
  }

  export type AchievementCreateManyRegistered_byInputEnvelope = {
    data: AchievementCreateManyRegistered_byInput | AchievementCreateManyRegistered_byInput[]
    skipDuplicates?: boolean
  }

  export type DisciplineCaseCreateWithoutRegistered_byInput = {
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutDiscipline_casesInput
  }

  export type DisciplineCaseUncheckedCreateWithoutRegistered_byInput = {
    id?: number
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DisciplineCaseCreateOrConnectWithoutRegistered_byInput = {
    where: DisciplineCaseWhereUniqueInput
    create: XOR<DisciplineCaseCreateWithoutRegistered_byInput, DisciplineCaseUncheckedCreateWithoutRegistered_byInput>
  }

  export type DisciplineCaseCreateManyRegistered_byInputEnvelope = {
    data: DisciplineCaseCreateManyRegistered_byInput | DisciplineCaseCreateManyRegistered_byInput[]
    skipDuplicates?: boolean
  }

  export type ClassImpactCreateWithoutRegistered_byInput = {
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutClass_impactsInput
  }

  export type ClassImpactUncheckedCreateWithoutRegistered_byInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClassImpactCreateOrConnectWithoutRegistered_byInput = {
    where: ClassImpactWhereUniqueInput
    create: XOR<ClassImpactCreateWithoutRegistered_byInput, ClassImpactUncheckedCreateWithoutRegistered_byInput>
  }

  export type ClassImpactCreateManyRegistered_byInputEnvelope = {
    data: ClassImpactCreateManyRegistered_byInput | ClassImpactCreateManyRegistered_byInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutClass_leadersInput = {
    update: XOR<StudentUpdateWithoutClass_leadersInput, StudentUncheckedUpdateWithoutClass_leadersInput>
    create: XOR<StudentCreateWithoutClass_leadersInput, StudentUncheckedCreateWithoutClass_leadersInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutClass_leadersInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutClass_leadersInput, StudentUncheckedUpdateWithoutClass_leadersInput>
  }

  export type StudentUpdateWithoutClass_leadersInput = {
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClass_leadersInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AchievementUpsertWithWhereUniqueWithoutRegistered_byInput = {
    where: AchievementWhereUniqueInput
    update: XOR<AchievementUpdateWithoutRegistered_byInput, AchievementUncheckedUpdateWithoutRegistered_byInput>
    create: XOR<AchievementCreateWithoutRegistered_byInput, AchievementUncheckedCreateWithoutRegistered_byInput>
  }

  export type AchievementUpdateWithWhereUniqueWithoutRegistered_byInput = {
    where: AchievementWhereUniqueInput
    data: XOR<AchievementUpdateWithoutRegistered_byInput, AchievementUncheckedUpdateWithoutRegistered_byInput>
  }

  export type AchievementUpdateManyWithWhereWithoutRegistered_byInput = {
    where: AchievementScalarWhereInput
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyWithoutRegistered_byInput>
  }

  export type DisciplineCaseUpsertWithWhereUniqueWithoutRegistered_byInput = {
    where: DisciplineCaseWhereUniqueInput
    update: XOR<DisciplineCaseUpdateWithoutRegistered_byInput, DisciplineCaseUncheckedUpdateWithoutRegistered_byInput>
    create: XOR<DisciplineCaseCreateWithoutRegistered_byInput, DisciplineCaseUncheckedCreateWithoutRegistered_byInput>
  }

  export type DisciplineCaseUpdateWithWhereUniqueWithoutRegistered_byInput = {
    where: DisciplineCaseWhereUniqueInput
    data: XOR<DisciplineCaseUpdateWithoutRegistered_byInput, DisciplineCaseUncheckedUpdateWithoutRegistered_byInput>
  }

  export type DisciplineCaseUpdateManyWithWhereWithoutRegistered_byInput = {
    where: DisciplineCaseScalarWhereInput
    data: XOR<DisciplineCaseUpdateManyMutationInput, DisciplineCaseUncheckedUpdateManyWithoutRegistered_byInput>
  }

  export type ClassImpactUpsertWithWhereUniqueWithoutRegistered_byInput = {
    where: ClassImpactWhereUniqueInput
    update: XOR<ClassImpactUpdateWithoutRegistered_byInput, ClassImpactUncheckedUpdateWithoutRegistered_byInput>
    create: XOR<ClassImpactCreateWithoutRegistered_byInput, ClassImpactUncheckedCreateWithoutRegistered_byInput>
  }

  export type ClassImpactUpdateWithWhereUniqueWithoutRegistered_byInput = {
    where: ClassImpactWhereUniqueInput
    data: XOR<ClassImpactUpdateWithoutRegistered_byInput, ClassImpactUncheckedUpdateWithoutRegistered_byInput>
  }

  export type ClassImpactUpdateManyWithWhereWithoutRegistered_byInput = {
    where: ClassImpactScalarWhereInput
    data: XOR<ClassImpactUpdateManyMutationInput, ClassImpactUncheckedUpdateManyWithoutRegistered_byInput>
  }

  export type StudentCreateWithoutAchievementsInput = {
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAchievementsInput = {
    id?: number
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantUncheckedCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAchievementsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
  }

  export type ClassLeaderCreateWithoutAchievementsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutClass_leadersInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderUncheckedCreateWithoutAchievementsInput = {
    id?: number
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderCreateOrConnectWithoutAchievementsInput = {
    where: ClassLeaderWhereUniqueInput
    create: XOR<ClassLeaderCreateWithoutAchievementsInput, ClassLeaderUncheckedCreateWithoutAchievementsInput>
  }

  export type StudentUpsertWithoutAchievementsInput = {
    update: XOR<StudentUpdateWithoutAchievementsInput, StudentUncheckedUpdateWithoutAchievementsInput>
    create: XOR<StudentCreateWithoutAchievementsInput, StudentUncheckedCreateWithoutAchievementsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAchievementsInput, StudentUncheckedUpdateWithoutAchievementsInput>
  }

  export type StudentUpdateWithoutAchievementsInput = {
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discipline_cases?: DisciplineCaseUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUncheckedUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type ClassLeaderUpsertWithoutAchievementsInput = {
    update: XOR<ClassLeaderUpdateWithoutAchievementsInput, ClassLeaderUncheckedUpdateWithoutAchievementsInput>
    create: XOR<ClassLeaderCreateWithoutAchievementsInput, ClassLeaderUncheckedCreateWithoutAchievementsInput>
    where?: ClassLeaderWhereInput
  }

  export type ClassLeaderUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: ClassLeaderWhereInput
    data: XOR<ClassLeaderUpdateWithoutAchievementsInput, ClassLeaderUncheckedUpdateWithoutAchievementsInput>
  }

  export type ClassLeaderUpdateWithoutAchievementsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutClass_leadersNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutRegistered_byNestedInput
  }

  export type ClassLeaderUncheckedUpdateWithoutAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutRegistered_byNestedInput
  }

  export type StudentCreateWithoutDiscipline_casesInput = {
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutDiscipline_casesInput = {
    id?: number
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantUncheckedCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDiscipline_casesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDiscipline_casesInput, StudentUncheckedCreateWithoutDiscipline_casesInput>
  }

  export type ClassLeaderCreateWithoutDiscipline_casesInput = {
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutClass_leadersInput
    achievements?: AchievementCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderUncheckedCreateWithoutDiscipline_casesInput = {
    id?: number
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutRegistered_byInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderCreateOrConnectWithoutDiscipline_casesInput = {
    where: ClassLeaderWhereUniqueInput
    create: XOR<ClassLeaderCreateWithoutDiscipline_casesInput, ClassLeaderUncheckedCreateWithoutDiscipline_casesInput>
  }

  export type StudentUpsertWithoutDiscipline_casesInput = {
    update: XOR<StudentUpdateWithoutDiscipline_casesInput, StudentUncheckedUpdateWithoutDiscipline_casesInput>
    create: XOR<StudentCreateWithoutDiscipline_casesInput, StudentUncheckedCreateWithoutDiscipline_casesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutDiscipline_casesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutDiscipline_casesInput, StudentUncheckedUpdateWithoutDiscipline_casesInput>
  }

  export type StudentUpdateWithoutDiscipline_casesInput = {
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutDiscipline_casesInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUncheckedUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type ClassLeaderUpsertWithoutDiscipline_casesInput = {
    update: XOR<ClassLeaderUpdateWithoutDiscipline_casesInput, ClassLeaderUncheckedUpdateWithoutDiscipline_casesInput>
    create: XOR<ClassLeaderCreateWithoutDiscipline_casesInput, ClassLeaderUncheckedCreateWithoutDiscipline_casesInput>
    where?: ClassLeaderWhereInput
  }

  export type ClassLeaderUpdateToOneWithWhereWithoutDiscipline_casesInput = {
    where?: ClassLeaderWhereInput
    data: XOR<ClassLeaderUpdateWithoutDiscipline_casesInput, ClassLeaderUncheckedUpdateWithoutDiscipline_casesInput>
  }

  export type ClassLeaderUpdateWithoutDiscipline_casesInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutClass_leadersNestedInput
    achievements?: AchievementUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutRegistered_byNestedInput
  }

  export type ClassLeaderUncheckedUpdateWithoutDiscipline_casesInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutRegistered_byNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutRegistered_byNestedInput
  }

  export type StudentCreateWithoutClass_impactsInput = {
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClass_impactsInput = {
    id?: number
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutStudentInput
    competitions?: CompetitionParticipantUncheckedCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClass_impactsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClass_impactsInput, StudentUncheckedCreateWithoutClass_impactsInput>
  }

  export type ClassLeaderCreateWithoutClass_impactsInput = {
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutClass_leadersInput
    achievements?: AchievementCreateNestedManyWithoutRegistered_byInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderUncheckedCreateWithoutClass_impactsInput = {
    id?: number
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutRegistered_byInput
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutRegistered_byInput
  }

  export type ClassLeaderCreateOrConnectWithoutClass_impactsInput = {
    where: ClassLeaderWhereUniqueInput
    create: XOR<ClassLeaderCreateWithoutClass_impactsInput, ClassLeaderUncheckedCreateWithoutClass_impactsInput>
  }

  export type StudentUpsertWithoutClass_impactsInput = {
    update: XOR<StudentUpdateWithoutClass_impactsInput, StudentUncheckedUpdateWithoutClass_impactsInput>
    create: XOR<StudentCreateWithoutClass_impactsInput, StudentUncheckedCreateWithoutClass_impactsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutClass_impactsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutClass_impactsInput, StudentUncheckedUpdateWithoutClass_impactsInput>
  }

  export type StudentUpdateWithoutClass_impactsInput = {
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClass_impactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutStudentNestedInput
    competitions?: CompetitionParticipantUncheckedUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type ClassLeaderUpsertWithoutClass_impactsInput = {
    update: XOR<ClassLeaderUpdateWithoutClass_impactsInput, ClassLeaderUncheckedUpdateWithoutClass_impactsInput>
    create: XOR<ClassLeaderCreateWithoutClass_impactsInput, ClassLeaderUncheckedCreateWithoutClass_impactsInput>
    where?: ClassLeaderWhereInput
  }

  export type ClassLeaderUpdateToOneWithWhereWithoutClass_impactsInput = {
    where?: ClassLeaderWhereInput
    data: XOR<ClassLeaderUpdateWithoutClass_impactsInput, ClassLeaderUncheckedUpdateWithoutClass_impactsInput>
  }

  export type ClassLeaderUpdateWithoutClass_impactsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutClass_leadersNestedInput
    achievements?: AchievementUpdateManyWithoutRegistered_byNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutRegistered_byNestedInput
  }

  export type ClassLeaderUncheckedUpdateWithoutClass_impactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutRegistered_byNestedInput
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutRegistered_byNestedInput
  }

  export type CompetitionParticipantCreateWithoutCompetitionInput = {
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
    student: StudentCreateNestedOneWithoutCompetitionsInput
  }

  export type CompetitionParticipantUncheckedCreateWithoutCompetitionInput = {
    id?: number
    student_id: number
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionParticipantCreateOrConnectWithoutCompetitionInput = {
    where: CompetitionParticipantWhereUniqueInput
    create: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionParticipantCreateManyCompetitionInputEnvelope = {
    data: CompetitionParticipantCreateManyCompetitionInput | CompetitionParticipantCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionParticipantWhereUniqueInput
    update: XOR<CompetitionParticipantUpdateWithoutCompetitionInput, CompetitionParticipantUncheckedUpdateWithoutCompetitionInput>
    create: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionParticipantWhereUniqueInput
    data: XOR<CompetitionParticipantUpdateWithoutCompetitionInput, CompetitionParticipantUncheckedUpdateWithoutCompetitionInput>
  }

  export type CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput = {
    where: CompetitionParticipantScalarWhereInput
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type StudentCreateWithoutCompetitionsInput = {
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCompetitionsInput = {
    id?: number
    student_code: string
    role?: $Enums.Role
    first_name: string
    middle_name: string
    last_name: string
    phone: string
    status?: $Enums.StudentStatus
    registered_at?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    achievements?: AchievementUncheckedCreateNestedManyWithoutStudentInput
    discipline_cases?: DisciplineCaseUncheckedCreateNestedManyWithoutStudentInput
    class_impacts?: ClassImpactUncheckedCreateNestedManyWithoutStudentInput
    class_leaders?: ClassLeaderUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCompetitionsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCompetitionsInput, StudentUncheckedCreateWithoutCompetitionsInput>
  }

  export type CompetitionCreateWithoutParticipantsInput = {
    name: string
    description?: string | null
    type: $Enums.CompetitionType
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    description?: string | null
    type: $Enums.CompetitionType
    start_date: Date | string
    end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionCreateOrConnectWithoutParticipantsInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
  }

  export type StudentUpsertWithoutCompetitionsInput = {
    update: XOR<StudentUpdateWithoutCompetitionsInput, StudentUncheckedUpdateWithoutCompetitionsInput>
    create: XOR<StudentCreateWithoutCompetitionsInput, StudentUncheckedCreateWithoutCompetitionsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCompetitionsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCompetitionsInput, StudentUncheckedUpdateWithoutCompetitionsInput>
  }

  export type StudentUpdateWithoutCompetitionsInput = {
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCompetitionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_code?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    achievements?: AchievementUncheckedUpdateManyWithoutStudentNestedInput
    discipline_cases?: DisciplineCaseUncheckedUpdateManyWithoutStudentNestedInput
    class_impacts?: ClassImpactUncheckedUpdateManyWithoutStudentNestedInput
    class_leaders?: ClassLeaderUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type CompetitionUpsertWithoutParticipantsInput = {
    update: XOR<CompetitionUpdateWithoutParticipantsInput, CompetitionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutParticipantsInput, CompetitionUncheckedUpdateWithoutParticipantsInput>
  }

  export type CompetitionUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumCompetitionTypeFieldUpdateOperationsInput | $Enums.CompetitionType
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AchievementCreateManyStudentInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DisciplineCaseCreateManyStudentInput = {
    id?: number
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClassImpactCreateManyStudentInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    registered_by_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionParticipantCreateManyStudentInput = {
    id?: number
    competition_id: number
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AchievementUpdateWithoutStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_by?: ClassLeaderUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AchievementUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplineCaseUpdateWithoutStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_by?: ClassLeaderUpdateOneRequiredWithoutDiscipline_casesNestedInput
  }

  export type DisciplineCaseUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplineCaseUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassImpactUpdateWithoutStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registered_by?: ClassLeaderUpdateOneRequiredWithoutClass_impactsNestedInput
  }

  export type ClassImpactUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassImpactUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    registered_by_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantUpdateWithoutStudentInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AchievementCreateManyRegistered_byInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.AchievementType
    points?: number
    achieved_at?: Date | string
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type DisciplineCaseCreateManyRegistered_byInput = {
    id?: number
    title: string
    description: string
    severity: $Enums.DisciplineSeverity
    action: $Enums.DisciplineAction
    incident_date?: Date | string
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ClassImpactCreateManyRegistered_byInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ImpactType
    points?: number
    impact_date?: Date | string
    student_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AchievementUpdateWithoutRegistered_byInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type AchievementUncheckedUpdateWithoutRegistered_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AchievementUncheckedUpdateManyWithoutRegistered_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    points?: IntFieldUpdateOperationsInput | number
    achieved_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplineCaseUpdateWithoutRegistered_byInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutDiscipline_casesNestedInput
  }

  export type DisciplineCaseUncheckedUpdateWithoutRegistered_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplineCaseUncheckedUpdateManyWithoutRegistered_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: EnumDisciplineSeverityFieldUpdateOperationsInput | $Enums.DisciplineSeverity
    action?: EnumDisciplineActionFieldUpdateOperationsInput | $Enums.DisciplineAction
    incident_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassImpactUpdateWithoutRegistered_byInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutClass_impactsNestedInput
  }

  export type ClassImpactUncheckedUpdateWithoutRegistered_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassImpactUncheckedUpdateManyWithoutRegistered_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImpactTypeFieldUpdateOperationsInput | $Enums.ImpactType
    points?: IntFieldUpdateOperationsInput | number
    impact_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantCreateManyCompetitionInput = {
    id?: number
    student_id: number
    position?: string | null
    points?: number
    joined_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type CompetitionParticipantUpdateWithoutCompetitionInput = {
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutCompetitionsNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateWithoutCompetitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutCompetitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    position?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}