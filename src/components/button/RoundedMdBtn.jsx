
export default function RoundedMdBtn({bg='bg-primary', color='white', border='border-0', borderColor='primary', content, width='w-40', size='sm', onclick}) {
    return (
        <button
                onClick={onclick}
                className={`${width} h-8 ${bg} text-${color} rounded-md text-${size} ${border} border-${borderColor} `}>
                  {content}
            </button>
      )
    }
