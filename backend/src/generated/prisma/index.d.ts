
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AnalysisHistory
 * 
 */
export type AnalysisHistory = $Result.DefaultSelection<Prisma.$AnalysisHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AnalysisHistories
 * const analysisHistories = await prisma.analysisHistory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more AnalysisHistories
   * const analysisHistories = await prisma.analysisHistory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.analysisHistory`: Exposes CRUD operations for the **AnalysisHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisHistories
    * const analysisHistories = await prisma.analysisHistory.findMany()
    * ```
    */
  get analysisHistory(): Prisma.AnalysisHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    AnalysisHistory: 'AnalysisHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "analysisHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AnalysisHistory: {
        payload: Prisma.$AnalysisHistoryPayload<ExtArgs>
        fields: Prisma.AnalysisHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          findFirst: {
            args: Prisma.AnalysisHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          findMany: {
            args: Prisma.AnalysisHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>[]
          }
          create: {
            args: Prisma.AnalysisHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          createMany: {
            args: Prisma.AnalysisHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>[]
          }
          delete: {
            args: Prisma.AnalysisHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          update: {
            args: Prisma.AnalysisHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisHistoryPayload>
          }
          aggregate: {
            args: Prisma.AnalysisHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisHistory>
          }
          groupBy: {
            args: Prisma.AnalysisHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisHistoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    analysisHistory?: AnalysisHistoryOmit
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
   * Models
   */

  /**
   * Model AnalysisHistory
   */

  export type AggregateAnalysisHistory = {
    _count: AnalysisHistoryCountAggregateOutputType | null
    _avg: AnalysisHistoryAvgAggregateOutputType | null
    _sum: AnalysisHistorySumAggregateOutputType | null
    _min: AnalysisHistoryMinAggregateOutputType | null
    _max: AnalysisHistoryMaxAggregateOutputType | null
  }

  export type AnalysisHistoryAvgAggregateOutputType = {
    id: number | null
  }

  export type AnalysisHistorySumAggregateOutputType = {
    id: number | null
  }

  export type AnalysisHistoryMinAggregateOutputType = {
    id: number | null
    text: string | null
    result: string | null
    createdAt: Date | null
  }

  export type AnalysisHistoryMaxAggregateOutputType = {
    id: number | null
    text: string | null
    result: string | null
    createdAt: Date | null
  }

  export type AnalysisHistoryCountAggregateOutputType = {
    id: number
    text: number
    result: number
    createdAt: number
    _all: number
  }


  export type AnalysisHistoryAvgAggregateInputType = {
    id?: true
  }

  export type AnalysisHistorySumAggregateInputType = {
    id?: true
  }

  export type AnalysisHistoryMinAggregateInputType = {
    id?: true
    text?: true
    result?: true
    createdAt?: true
  }

  export type AnalysisHistoryMaxAggregateInputType = {
    id?: true
    text?: true
    result?: true
    createdAt?: true
  }

  export type AnalysisHistoryCountAggregateInputType = {
    id?: true
    text?: true
    result?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisHistory to aggregate.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisHistories
    **/
    _count?: true | AnalysisHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisHistoryMaxAggregateInputType
  }

  export type GetAnalysisHistoryAggregateType<T extends AnalysisHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisHistory[P]>
      : GetScalarType<T[P], AggregateAnalysisHistory[P]>
  }




  export type AnalysisHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisHistoryWhereInput
    orderBy?: AnalysisHistoryOrderByWithAggregationInput | AnalysisHistoryOrderByWithAggregationInput[]
    by: AnalysisHistoryScalarFieldEnum[] | AnalysisHistoryScalarFieldEnum
    having?: AnalysisHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisHistoryCountAggregateInputType | true
    _avg?: AnalysisHistoryAvgAggregateInputType
    _sum?: AnalysisHistorySumAggregateInputType
    _min?: AnalysisHistoryMinAggregateInputType
    _max?: AnalysisHistoryMaxAggregateInputType
  }

  export type AnalysisHistoryGroupByOutputType = {
    id: number
    text: string
    result: string
    createdAt: Date
    _count: AnalysisHistoryCountAggregateOutputType | null
    _avg: AnalysisHistoryAvgAggregateOutputType | null
    _sum: AnalysisHistorySumAggregateOutputType | null
    _min: AnalysisHistoryMinAggregateOutputType | null
    _max: AnalysisHistoryMaxAggregateOutputType | null
  }

  type GetAnalysisHistoryGroupByPayload<T extends AnalysisHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisHistory"]>

  export type AnalysisHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisHistory"]>

  export type AnalysisHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    result?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisHistory"]>

  export type AnalysisHistorySelectScalar = {
    id?: boolean
    text?: boolean
    result?: boolean
    createdAt?: boolean
  }

  export type AnalysisHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "result" | "createdAt", ExtArgs["result"]["analysisHistory"]>

  export type $AnalysisHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      result: string
      createdAt: Date
    }, ExtArgs["result"]["analysisHistory"]>
    composites: {}
  }

  type AnalysisHistoryGetPayload<S extends boolean | null | undefined | AnalysisHistoryDefaultArgs> = $Result.GetResult<Prisma.$AnalysisHistoryPayload, S>

  type AnalysisHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisHistoryCountAggregateInputType | true
    }

  export interface AnalysisHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisHistory'], meta: { name: 'AnalysisHistory' } }
    /**
     * Find zero or one AnalysisHistory that matches the filter.
     * @param {AnalysisHistoryFindUniqueArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisHistoryFindUniqueArgs>(args: SelectSubset<T, AnalysisHistoryFindUniqueArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisHistoryFindUniqueOrThrowArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryFindFirstArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisHistoryFindFirstArgs>(args?: SelectSubset<T, AnalysisHistoryFindFirstArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryFindFirstOrThrowArgs} args - Arguments to find a AnalysisHistory
     * @example
     * // Get one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisHistories
     * const analysisHistories = await prisma.analysisHistory.findMany()
     * 
     * // Get first 10 AnalysisHistories
     * const analysisHistories = await prisma.analysisHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisHistoryWithIdOnly = await prisma.analysisHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisHistoryFindManyArgs>(args?: SelectSubset<T, AnalysisHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisHistory.
     * @param {AnalysisHistoryCreateArgs} args - Arguments to create a AnalysisHistory.
     * @example
     * // Create one AnalysisHistory
     * const AnalysisHistory = await prisma.analysisHistory.create({
     *   data: {
     *     // ... data to create a AnalysisHistory
     *   }
     * })
     * 
     */
    create<T extends AnalysisHistoryCreateArgs>(args: SelectSubset<T, AnalysisHistoryCreateArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisHistories.
     * @param {AnalysisHistoryCreateManyArgs} args - Arguments to create many AnalysisHistories.
     * @example
     * // Create many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisHistoryCreateManyArgs>(args?: SelectSubset<T, AnalysisHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisHistories and returns the data saved in the database.
     * @param {AnalysisHistoryCreateManyAndReturnArgs} args - Arguments to create many AnalysisHistories.
     * @example
     * // Create many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisHistories and only return the `id`
     * const analysisHistoryWithIdOnly = await prisma.analysisHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisHistory.
     * @param {AnalysisHistoryDeleteArgs} args - Arguments to delete one AnalysisHistory.
     * @example
     * // Delete one AnalysisHistory
     * const AnalysisHistory = await prisma.analysisHistory.delete({
     *   where: {
     *     // ... filter to delete one AnalysisHistory
     *   }
     * })
     * 
     */
    delete<T extends AnalysisHistoryDeleteArgs>(args: SelectSubset<T, AnalysisHistoryDeleteArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisHistory.
     * @param {AnalysisHistoryUpdateArgs} args - Arguments to update one AnalysisHistory.
     * @example
     * // Update one AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisHistoryUpdateArgs>(args: SelectSubset<T, AnalysisHistoryUpdateArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisHistories.
     * @param {AnalysisHistoryDeleteManyArgs} args - Arguments to filter AnalysisHistories to delete.
     * @example
     * // Delete a few AnalysisHistories
     * const { count } = await prisma.analysisHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisHistoryDeleteManyArgs>(args?: SelectSubset<T, AnalysisHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisHistoryUpdateManyArgs>(args: SelectSubset<T, AnalysisHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisHistories and returns the data updated in the database.
     * @param {AnalysisHistoryUpdateManyAndReturnArgs} args - Arguments to update many AnalysisHistories.
     * @example
     * // Update many AnalysisHistories
     * const analysisHistory = await prisma.analysisHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisHistories and only return the `id`
     * const analysisHistoryWithIdOnly = await prisma.analysisHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalysisHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisHistory.
     * @param {AnalysisHistoryUpsertArgs} args - Arguments to update or create a AnalysisHistory.
     * @example
     * // Update or create a AnalysisHistory
     * const analysisHistory = await prisma.analysisHistory.upsert({
     *   create: {
     *     // ... data to create a AnalysisHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisHistory we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisHistoryUpsertArgs>(args: SelectSubset<T, AnalysisHistoryUpsertArgs<ExtArgs>>): Prisma__AnalysisHistoryClient<$Result.GetResult<Prisma.$AnalysisHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryCountArgs} args - Arguments to filter AnalysisHistories to count.
     * @example
     * // Count the number of AnalysisHistories
     * const count = await prisma.analysisHistory.count({
     *   where: {
     *     // ... the filter for the AnalysisHistories we want to count
     *   }
     * })
    **/
    count<T extends AnalysisHistoryCountArgs>(
      args?: Subset<T, AnalysisHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisHistoryAggregateArgs>(args: Subset<T, AnalysisHistoryAggregateArgs>): Prisma.PrismaPromise<GetAnalysisHistoryAggregateType<T>>

    /**
     * Group by AnalysisHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisHistoryGroupByArgs} args - Group by arguments.
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
      T extends AnalysisHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisHistory model
   */
  readonly fields: AnalysisHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AnalysisHistory model
   */
  interface AnalysisHistoryFieldRefs {
    readonly id: FieldRef<"AnalysisHistory", 'Int'>
    readonly text: FieldRef<"AnalysisHistory", 'String'>
    readonly result: FieldRef<"AnalysisHistory", 'String'>
    readonly createdAt: FieldRef<"AnalysisHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisHistory findUnique
   */
  export type AnalysisHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory findUniqueOrThrow
   */
  export type AnalysisHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory findFirst
   */
  export type AnalysisHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisHistories.
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisHistories.
     */
    distinct?: AnalysisHistoryScalarFieldEnum | AnalysisHistoryScalarFieldEnum[]
  }

  /**
   * AnalysisHistory findFirstOrThrow
   */
  export type AnalysisHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistory to fetch.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisHistories.
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisHistories.
     */
    distinct?: AnalysisHistoryScalarFieldEnum | AnalysisHistoryScalarFieldEnum[]
  }

  /**
   * AnalysisHistory findMany
   */
  export type AnalysisHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisHistories to fetch.
     */
    where?: AnalysisHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisHistories to fetch.
     */
    orderBy?: AnalysisHistoryOrderByWithRelationInput | AnalysisHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisHistories.
     */
    cursor?: AnalysisHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisHistories.
     */
    skip?: number
    distinct?: AnalysisHistoryScalarFieldEnum | AnalysisHistoryScalarFieldEnum[]
  }

  /**
   * AnalysisHistory create
   */
  export type AnalysisHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalysisHistory.
     */
    data: XOR<AnalysisHistoryCreateInput, AnalysisHistoryUncheckedCreateInput>
  }

  /**
   * AnalysisHistory createMany
   */
  export type AnalysisHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisHistories.
     */
    data: AnalysisHistoryCreateManyInput | AnalysisHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisHistory createManyAndReturn
   */
  export type AnalysisHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisHistories.
     */
    data: AnalysisHistoryCreateManyInput | AnalysisHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisHistory update
   */
  export type AnalysisHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalysisHistory.
     */
    data: XOR<AnalysisHistoryUpdateInput, AnalysisHistoryUncheckedUpdateInput>
    /**
     * Choose, which AnalysisHistory to update.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory updateMany
   */
  export type AnalysisHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisHistories.
     */
    data: XOR<AnalysisHistoryUpdateManyMutationInput, AnalysisHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisHistories to update
     */
    where?: AnalysisHistoryWhereInput
    /**
     * Limit how many AnalysisHistories to update.
     */
    limit?: number
  }

  /**
   * AnalysisHistory updateManyAndReturn
   */
  export type AnalysisHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisHistories.
     */
    data: XOR<AnalysisHistoryUpdateManyMutationInput, AnalysisHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisHistories to update
     */
    where?: AnalysisHistoryWhereInput
    /**
     * Limit how many AnalysisHistories to update.
     */
    limit?: number
  }

  /**
   * AnalysisHistory upsert
   */
  export type AnalysisHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalysisHistory to update in case it exists.
     */
    where: AnalysisHistoryWhereUniqueInput
    /**
     * In case the AnalysisHistory found by the `where` argument doesn't exist, create a new AnalysisHistory with this data.
     */
    create: XOR<AnalysisHistoryCreateInput, AnalysisHistoryUncheckedCreateInput>
    /**
     * In case the AnalysisHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisHistoryUpdateInput, AnalysisHistoryUncheckedUpdateInput>
  }

  /**
   * AnalysisHistory delete
   */
  export type AnalysisHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
    /**
     * Filter which AnalysisHistory to delete.
     */
    where: AnalysisHistoryWhereUniqueInput
  }

  /**
   * AnalysisHistory deleteMany
   */
  export type AnalysisHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisHistories to delete
     */
    where?: AnalysisHistoryWhereInput
    /**
     * Limit how many AnalysisHistories to delete.
     */
    limit?: number
  }

  /**
   * AnalysisHistory without action
   */
  export type AnalysisHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisHistory
     */
    select?: AnalysisHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisHistory
     */
    omit?: AnalysisHistoryOmit<ExtArgs> | null
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


  export const AnalysisHistoryScalarFieldEnum: {
    id: 'id',
    text: 'text',
    result: 'result',
    createdAt: 'createdAt'
  };

  export type AnalysisHistoryScalarFieldEnum = (typeof AnalysisHistoryScalarFieldEnum)[keyof typeof AnalysisHistoryScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type AnalysisHistoryWhereInput = {
    AND?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    OR?: AnalysisHistoryWhereInput[]
    NOT?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    id?: IntFilter<"AnalysisHistory"> | number
    text?: StringFilter<"AnalysisHistory"> | string
    result?: StringFilter<"AnalysisHistory"> | string
    createdAt?: DateTimeFilter<"AnalysisHistory"> | Date | string
  }

  export type AnalysisHistoryOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    OR?: AnalysisHistoryWhereInput[]
    NOT?: AnalysisHistoryWhereInput | AnalysisHistoryWhereInput[]
    text?: StringFilter<"AnalysisHistory"> | string
    result?: StringFilter<"AnalysisHistory"> | string
    createdAt?: DateTimeFilter<"AnalysisHistory"> | Date | string
  }, "id">

  export type AnalysisHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    _count?: AnalysisHistoryCountOrderByAggregateInput
    _avg?: AnalysisHistoryAvgOrderByAggregateInput
    _max?: AnalysisHistoryMaxOrderByAggregateInput
    _min?: AnalysisHistoryMinOrderByAggregateInput
    _sum?: AnalysisHistorySumOrderByAggregateInput
  }

  export type AnalysisHistoryScalarWhereWithAggregatesInput = {
    AND?: AnalysisHistoryScalarWhereWithAggregatesInput | AnalysisHistoryScalarWhereWithAggregatesInput[]
    OR?: AnalysisHistoryScalarWhereWithAggregatesInput[]
    NOT?: AnalysisHistoryScalarWhereWithAggregatesInput | AnalysisHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnalysisHistory"> | number
    text?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    result?: StringWithAggregatesFilter<"AnalysisHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisHistory"> | Date | string
  }

  export type AnalysisHistoryCreateInput = {
    text: string
    result: string
    createdAt?: Date | string
  }

  export type AnalysisHistoryUncheckedCreateInput = {
    id?: number
    text: string
    result: string
    createdAt?: Date | string
  }

  export type AnalysisHistoryUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHistoryCreateManyInput = {
    id?: number
    text: string
    result: string
    createdAt?: Date | string
  }

  export type AnalysisHistoryUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AnalysisHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnalysisHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisHistorySumOrderByAggregateInput = {
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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