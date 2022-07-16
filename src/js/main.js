import $ from './lib/lib';


$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: "Modal title",
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reiciendis inventore rerum facilis quidem porro dolorum quis itaque modi alias obcaecati soluta, aliquid voluptas assumenda. Blanditiis tempora dolorem sint harum!'
    },
    btns: {
        settings: [
            [
                'close',
                ['btn-danger', 'mr10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                } 
            ],
            [
                'another button',
                ['btn-warning', 'ml10'],
                false,
                () => {
                    alert('Hello world');
                }
            ]
        ]
    }
}));



