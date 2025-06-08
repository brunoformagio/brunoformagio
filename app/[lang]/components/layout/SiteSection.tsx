export const SiteSection = ({ id, children, className }: any) => {
    return (
        <section className={`w-full min-h-screen flex flex-col lg:block justify-center fadeIn  lg:pr-[0vw]  lg:pt-[4vw] ${className}`} id={id}>
            {children}
        </section>
    );
};