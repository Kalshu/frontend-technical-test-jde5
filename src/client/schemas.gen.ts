// This file is auto-generated by @hey-api/openapi-ts

export const $Comment = {
    required: ['authorId', 'createdAt', 'id', 'memeId'],
    type: 'object',
    properties: {
        id: {
            '$ref': '#/components/schemas/CommentId'
        },
        authorId: {
            '$ref': '#/components/schemas/UserId'
        },
        memeId: {
            '$ref': '#/components/schemas/MemeId'
        },
        content: {
            type: 'string',
            nullable: true
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        }
    },
    additionalProperties: false
} as const;

export const $CommentCreationRequestBody = {
    required: ['content'],
    type: 'object',
    properties: {
        content: {
            minLength: 1,
            type: 'string'
        }
    },
    additionalProperties: false
} as const;

export const $CommentId = {
    required: ['value'],
    type: 'string',
    additionalProperties: false,
    format: 'uuid'
} as const;

export const $CommentList = {
    required: ['pageSize', 'total'],
    type: 'object',
    properties: {
        results: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Comment'
            },
            nullable: true
        },
        total: {
            type: 'integer',
            format: 'int32'
        },
        pageSize: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $LoginRequestPayload = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            nullable: true
        },
        password: {
            type: 'string',
            nullable: true
        }
    },
    additionalProperties: false
} as const;

export const $LoginResponse = {
    type: 'object',
    properties: {
        jwt: {
            type: 'string',
            nullable: true
        }
    },
    additionalProperties: false
} as const;

export const $Meme = {
    required: ['authorId', 'commentsCount', 'createdAt', 'id'],
    type: 'object',
    properties: {
        id: {
            '$ref': '#/components/schemas/MemeId'
        },
        authorId: {
            '$ref': '#/components/schemas/UserId'
        },
        pictureUrl: {
            type: 'string',
            nullable: true
        },
        description: {
            type: 'string',
            nullable: true
        },
        texts: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/MemeText'
            },
            nullable: true
        },
        commentsCount: {
            type: 'integer',
            format: 'int32'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        }
    },
    additionalProperties: false
} as const;

export const $MemeId = {
    required: ['value'],
    type: 'string',
    additionalProperties: false,
    format: 'uuid'
} as const;

export const $MemeList = {
    required: ['pageSize', 'total'],
    type: 'object',
    properties: {
        results: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/Meme'
            },
            nullable: true
        },
        total: {
            type: 'integer',
            format: 'int32'
        },
        pageSize: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $MemeText = {
    required: ['x', 'y'],
    type: 'object',
    properties: {
        content: {
            type: 'string',
            nullable: true
        },
        x: {
            type: 'integer',
            format: 'int32'
        },
        y: {
            type: 'integer',
            format: 'int32'
        }
    },
    additionalProperties: false
} as const;

export const $ProblemDetails = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            nullable: true
        },
        title: {
            type: 'string',
            nullable: true
        },
        status: {
            type: 'integer',
            format: 'int32',
            nullable: true
        },
        detail: {
            type: 'string',
            nullable: true
        },
        instance: {
            type: 'string',
            nullable: true
        }
    },
    additionalProperties: {}
} as const;

export const $User = {
    required: ['id'],
    type: 'object',
    properties: {
        id: {
            '$ref': '#/components/schemas/UserId'
        },
        username: {
            type: 'string',
            nullable: true
        },
        pictureUrl: {
            type: 'string',
            nullable: true
        }
    },
    additionalProperties: false
} as const;

export const $UserId = {
    required: ['value'],
    type: 'string',
    additionalProperties: false,
    format: 'uuid'
} as const;