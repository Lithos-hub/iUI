type Position = 'top' | 'bottom'

export interface Alert {
    title?: string;
    message?: string;
    type?: string;
    open?: boolean;
    showIcon?: boolean;
    position?: Position
}