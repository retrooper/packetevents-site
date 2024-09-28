export interface faqProps {
  index: number;
  children: any[];
}

const FaqItem = (props: faqProps) => {
  return (
    <>
      <h2 id={`accordion-open-heading-${props.index}`}>
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white hover:bg-zinc-700 gap-3"
          data-accordion-target={`#accordion-open-body-${props.index}`}
          aria-expanded="false"
          aria-controls={`accordion-open-body-${props.index}`}
        >
          {props.children[0]}
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-open-body-${props.index}`}
        class="hidden"
        aria-labelledby={`accordion-open-heading-${props.index}`}
      >
        {props.children[1]}
      </div>
    </>
  );
};

export default FaqItem;
