import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

interface Tag {
  value: string
  label: string
}

export default function BoroughSelector(props: {
  selectedBorough: string
  onSelect: (x: string) => void
  tags: Tag[]
}): React.ReactElement {
  function filterTags(e: React.MouseEvent<HTMLButtonElement>) {
    props.onSelect(e.currentTarget.value)
  }

  return (
    <>
      <div className="mx-auto hidden lg:flex flex-col items-center lg:mx-0 border p-4 bg-black rounded-md mt-5">
        <h1 className="font-bold text-white">Filter bike racks by bourough:</h1>
        <button
          onClick={(e) => filterTags(e)}
          className={`mt-3 text-sm text-white uppercase cursor-pointer border-b ${
            props.selectedBorough === 'All Boroughs'
              ? 'border-b-yellow-500'
              : 'border-b-white'
          }`}
          value={'All Boroughs'}
        >
          View all bouroughs
        </button>
        {props.tags?.map((tag: Tag) => (
          <button
            key={tag.value}
            onClick={(e) => filterTags(e)}
            className={`mt-3 text-sm uppercase cursor-pointer text-white border-b ${
              props.selectedBorough === tag.value
                ? 'border-b-yellow-500'
                : 'border-b-white'
            }`}
            value={tag.value}
          >
            {tag.label}
          </button>
        ))}
      </div>
      <div className="lg:hidden text-center z-10 mt-5">
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <div className="flex items-center">
                <p className="text-lg mr-2">View racks in:</p>
                <Menu.Button
                  className={`inline-flex w-48 border ${
                    open ? 'border-black border-b-0' : 'border-pearl'
                  } justify-between items-center bg-white bg-opacity-20 px-4 py-2 text-sm font-medium text-onyx hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  value="All Boroughs"
                >
                  {props.selectedBorough === ''
                    ? 'All Boroughs'
                    : props.selectedBorough}
                  <img src="https://ncavaliere1991.github.io/nyc-dot/arrow-down.svg" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                show={open}
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-48 origin-top-right border border-black border-t-0 bg-white shadow-lg ring-opacity-5 hover:font-bold focus:outline-none"
                >
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          key="all"
                          className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:font-semibold`}
                          onClick={(e) => filterTags(e)}
                          value="All Boroughs"
                        >
                          All Boroughs
                        </button>
                      )}
                    </Menu.Item>
                    {props.tags?.map((tag: Tag) => (
                      <Menu.Item key={tag.value}>
                        <button
                          key={tag.value}
                          className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:font-semibold`}
                          onClick={(e) => filterTags(e)}
                          value={tag.value}
                        >
                          {tag.label[0].toUpperCase() + tag.label.slice(1)}
                        </button>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </>
  )
}
