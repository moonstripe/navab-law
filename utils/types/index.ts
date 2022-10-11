import { ComponentChildren } from 'preact'

export interface Meta {
    title?: string,
    type?: string,
    description?: string,
    url?: string,
    image?: string,
    customMeta?: any
}

export interface LayoutProps {
    children: ComponentChildren;
    meta: Meta;
}

export interface ScrollSpyProps {
    setter: (id: string) => void;
}

export interface PostProps {
    markup: string;
}

export interface SideProps {
    markdown: string;
}

export interface RandomProps {
    currentSlug: string;
    postList: PostModel[];
}

export interface PostModel {
    slug: string,
    date: string,
    title: string
}

export interface MarkDef {
    _key: string;
    _type: string,
    href?: string
}

export interface Child {
    _key: string;
    _type: string;
    marks: string[];
    text: string
}

export enum Style {
    NORMAL = "normal",
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    QUOTE = "blockquote"
}

export interface Block {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: MarkDef[];
    style: string,
    listItem?: string
}

export interface Post {
    title: string;
    authorName: string;
    body: Block[];
    slug: string;
    publishedAt: string;
    image: string
}

export interface SummaryPost {
    title: string;
    body: Block[];
    slug: string;
    publishedAt: string;
}

export interface PortableTextProps {
    values: Block[];
    truncated?: boolean;
    components?: ComponentChildren
}

export interface TickerProps {
    postArr: SummaryPost[]
}

export interface NavProps {
    postArr: SummaryPost[],
    hasTicker: boolean,
}