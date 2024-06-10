'use client'

import { useRouter } from 'next/navigation'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";
import { createCategory } from "@/lib/actions/category.actions";
import { useState } from "react";
import { Button } from '@/components/ui/button';

const CreateCategoryAlert = () => {

    const router = useRouter();

    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = async () => {
        await createCategory({ title: newCategory.trim() })

        router.refresh();
    }

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger className="" asChild>
                    <Button className="w-fit rounded-xl bg-orange-500 hover:bg-orange-600">Add new category</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                        <AlertDialogTitle>New Category</AlertDialogTitle>
                        <AlertDialogDescription>
                            <Input type="text" placeholder="Category name" className="input-field mt-3" onChange={(e) => setNewCategory(e.target.value)} />
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                        <AlertDialogAction onClick={handleAddCategory}>Add</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default CreateCategoryAlert