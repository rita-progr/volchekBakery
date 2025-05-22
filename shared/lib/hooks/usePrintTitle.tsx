// export type TitleKey = 'cake' | 'bread' | 'cupcake' | 'iceCream' | 'coffee';

export function usePrintTitle(title?: string): string {
    const titleMap: Record<string, string> = {
        cake: 'Торты, пироги',
        bread: 'Булочные изделия',
        cupcake: 'Пирожные',
        iceCream: 'Мороженое',
        coffee: 'Напитки'
    };

    return title ? titleMap[title] : 'Каталог товаров';
}