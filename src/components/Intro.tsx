import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FileTextIcon, Link2Icon, Pencil2Icon } from '@radix-ui/react-icons';

import { SessionContext } from '../context/SessionContext';

const features = [
  {
    name: 'Notes',
    description: 'Add some notes',
    icon: FileTextIcon,
  },
  {
    name: 'Tasks',
    description: 'List some tasks',
    icon: Pencil2Icon,
  },
  {
    name: 'Links',
    description: 'Bookmark your links',
    icon: Link2Icon,
  },
];

export default function Intro() {
	

  const session = useContext(SessionContext);

  return (
		<div className='h-screen px-4 pt-40'>
			<div className='mx-auto max-w-7xl px-3 md:px-10'>
				<div className='text-center'>
					<p className='mt-2 text-3xl font-medium leading-8 sm:text-5xl'>
						Say 👋 to <span className='font-black'>Xema.</span>
					</p>
					<p className='mx-auto mt-4 max-w-2xl text-xl text-neutral-500 dark:text-neutral-300'>
						A new space for saving everything
					</p>
				</div>

				<div className='mt-24 flex justify-center'>
					<dl className='space-y-10 md:grid md:grid-cols-3 md:gap-x-24 md:gap-y-12 md:space-y-0'>
						{features.map(feature => (
							<div key={feature.name} className='relative'>
								<dt>
									<div className='absolute flex h-12 w-12 items-center justify-center rounded-md bg-orange-200/70 text-orange-600 dark:bg-orange-400 dark:text-orange-700'>
										<feature.icon className='h-6 w-6' aria-hidden='true' />
									</div>
									<p className='ml-16 text-lg font-black leading-6'>
										{feature.name}
									</p>
								</dt>
								<dd className='mt-2 ml-16 font-sans text-base text-neutral-500 dark:text-neutral-300'>
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>

				<div className='mt-24 flex flex-col items-center justify-center font-medium leading-8 tracking-tight text-neutral-900'>
					{!session ? (
						<div className='relative inline-flex w-fit'>
							<Link to='/signin'>
								<button
									type='button'
									className='mb-2 flex animate-bounce items-center justify-center rounded bg-orange-500 px-8 py-3 pb-3 font-bold leading-tight text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-0 dark:bg-orange-700'
								>
									Get started &rarr;
								</button>
							</Link>
						</div>
					) : (
						<Link to='/home'>
							<button
								type='button'
								className='mb-2 flex animate-bounce items-center justify-center rounded bg-orange-500 px-8 py-3 pb-3 font-bold leading-tight text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-0 dark:bg-orange-700'
							>
								Go home &rarr;
							</button>
						</Link>
					)}
					<div className='mb-14 mt-14 rounded-lg px-4 py-2 text-center font-mono text-base md:text-lg font-medium leading-8 tracking-tight dark:text-neutral-300'>
						<span>
							<strong>Tip:</strong> Use Command + K to access the command
							palette
						</span>
					</div>
					<div className='mb-24'>
						<a
							href='https://github.com/lucky-chap/xema'
							target='_blank'
							rel='noreferrer'
						>
							<span className='sr-only'>Link to github</span>
							<svg
								viewBox='0 0 16 16'
								width='24'
								height='24'
								fill='currentColor'
								aria-hidden='true'
							>
								<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
