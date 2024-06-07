'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './TreeComponent.module.css';
const Tree = dynamic(() => import('react-d3-tree'), { ssr: false });
const orgChart = {
    name: 'Front-end',
      attributes: {
        Experience: 'one year and nine months',
      },
      children: [
        {
          name: 'Frame',
          // attributes: {
          //   department: 'Fabrication',
          // },
          children: [
            {
              name: 'React',
            },
            {
              name: 'NextJS',
            },
          ],
        },
        {
          name: 'Style',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'SCSS',
            },
            {
              name: 'CSS',
            },
            {
              name: 'MUI',
            },
            {
              name: 'Bootstrap',
            },
            {
              name: 'Tailwind CSS',
            },
          ],
        },
        {
          name: 'Logic',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'JavaSrcipt',
            },
            {
              name: 'TypeScript',
            },
          ],
        },
        {
          name: 'API',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Fetch',
            },
            {
              name: 'HTTP(S)',
              children: [
                {
                  name: 'GET',
                },
                {
                  name: 'PUT',
                },
                {
                  name: 'POST',
                },
                {
                  name: 'DELETE',
                },
              ],
            },
            {
              name: 'WebSocket',
            },
          ],
        },
      ],
  };

function page() {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const treeWrapper = document.getElementById('treeWrapper');
        if (treeWrapper) {
          const dimensions = treeWrapper.getBoundingClientRect();
          setTranslate({ x: dimensions.width / 2, y: 100 });
        }
      }, []);

  return (
    <div id="treeWrapper" className='w-full h-full mt-0'>
        <Tree data={orgChart} translate={translate} orientation="vertical"/>
    </div>
  )
}

export default page