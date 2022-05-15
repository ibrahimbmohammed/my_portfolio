import Button from '@atoms/a-button';

const HaveAnyQuestions = () => {
    return (
        <div className="flex flex-col space-y-4 max-w-[24rem] ">
            <h4 className="text-primaryColor font-semibold text-2xl">Have any Questions?</h4>
            <p className="text-primaryText text-xs font-light leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eleifend enim
                non luctus. Vestibulum magna dui, porttitor vel diam nec, pellentesque bibendum
                odio. Lorem ipsum dolor sit amet,
            </p>
            <Button type="button" className="text-xs" label="Ask your Question" />
        </div>
    );
};

export default HaveAnyQuestions;
