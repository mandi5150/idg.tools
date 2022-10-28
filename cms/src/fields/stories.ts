import { CustomCmsField, ID, MARKDOWN_FIELD, NAME } from './shared'

export const StoriesFields: CustomCmsField[] = [
    ID,
    NAME,
    {
        label: 'Intro',
        name: 'intro',
        hint: "A short intro to catch the reader's interest.",
        i18n: true,
        ...MARKDOWN_FIELD,
        required: false,
    },
    {
        label: 'Story',
        name: 'story',
        hint: 'Your story of how you practiced inner development and how it helped you with sustainable development.',
        i18n: true,
        ...MARKDOWN_FIELD,
    },
    {
        label: 'Contributors',
        name: 'contributors',
        hint: 'Give credit to the people behind the story.',
        multiple: true,
        widget: 'relation',
        collection: 'contributors',
        value_field: 'id',
        search_fields: ['name', 'id'],
        display_fields: ['name'],
        i18n: true,
    },
    {
        label: 'Relevant skills',
        name: 'relevancy',
        hint: 'Link related skills from the IDG framework.',
        widget: 'list',
        i18n: true,
        summary: '{{fields.skill}} - {{fields.score}}',
        collapsed: true,
        fields: [
            {
                label: 'Skill',
                name: 'skill',
                widget: 'relation',
                collection: 'skills',
                value_field: 'id',
                search_fields: ['name', 'id'],
                display_fields: ['name'],
                i18n: 'duplicate',
            },
            {
                label: 'Skill relevancy',
                name: 'score',
                hint: 'Score how relevant this skill is (0-100)',
                min: 0,
                max: 100,
                widget: 'number',
                i18n: 'duplicate',
            },
        ],
    },
    {
        label: 'Tags',
        name: 'tags',
        hint: 'Add tags to help people find the most relevant content for their context and background.',
        multiple: true,
        widget: 'relation',
        collection: 'tags',
        value_field: 'id',
        search_fields: ['name', 'id'],
        display_fields: ['name'],
        i18n: true,
        required: false,
    },
    {
        label: 'Slug',
        name: 'slug',
        i18n: 'duplicate',
        widget: 'uniqueSlug',
    },
    {
        label: 'Link',
        name: 'link',
        i18n: 'duplicate',
        widget: 'hidden',
    },
]