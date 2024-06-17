import { NextRequest, NextResponse } from "next/server";
import { defineOneEntry } from "oneentry";



const { FormData } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

