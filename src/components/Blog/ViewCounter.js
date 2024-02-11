"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react'

const supabase = createClientComponentClient();

const ViewCounter = ({slug, noCount=false, showCount=true}) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementView = async () => {
            try {
                let { error } = await supabase.rpc('increment', {
                        slug_text:slug
                    });
                
                if (error) {
                    console.error('Error during increment inside try: ', error)
                }
            } catch(error) {
                console.error('Error during increment: ', error)
            }
        }

        if (!noCount) {
            incrementView();
        }
        
        }, [slug, noCount])

    
    if (showCount) {
        return (
            <div>{views} views</div>
          )
    } else {
        return null;
    }
}

export default ViewCounter