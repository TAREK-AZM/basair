"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
export default function JoinForm() {
  const [isENSAStudent, setIsENSAStudent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    level: "",
    field: "",
    gender: "male",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted", formData);
    setFormSubmitted(true);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle>انضم لنادي بصائر</CardTitle>
        <CardDescription>
          قم بملئ الاستمارة كاملة لكي تصبح عضوا في نادي بصائر
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">الإسم</Label>
              <Input
                id="firstName"
                className="focus-visible:ring-primary"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">النسب</Label>
              <Input
                id="lastName"
                className="focus-visible:ring-primary"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                className="focus-visible:ring-primary"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                type="tel"
                className="focus-visible:ring-primary"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Switch
              className="space-x-reverse"
              id="ensaStudent"
              checked={isENSAStudent}
              onCheckedChange={setIsENSAStudent}
            />
            <Label htmlFor="ensaStudent">
              هل تدرس بالمدرسة الوطنية للعلوم التطبيقية بطنجة؟
            </Label>
          </div>
          {isENSAStudent && (
            <div className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="level">المستوى الدراسي</Label>
                <Select
                  required
                  onValueChange={(value) => handleSelectChange("level", value)}
                >
                  <SelectTrigger
                    id="level"
                    className="focus:ring-primary"
                    dir="rtl"
                  >
                    <SelectValue placeholder="اختر المستوى" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                    <SelectItem value="5">5th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="field">الشعبة</Label>
                <Select
                  required
                  onValueChange={(value) => handleSelectChange("field", value)}
                >
                  <SelectTrigger
                    id="field"
                    className="focus:ring-primary"
                    dir="rtl"
                  >
                    <SelectValue placeholder="اختر الشعبة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AP">AP</SelectItem>
                    <SelectItem value="GINF">GINF</SelectItem>
                    <SelectItem value="GSEA">GSEA</SelectItem>
                    <SelectItem value="GIL">GIL</SelectItem>
                    <SelectItem value="GSTR">GSTR</SelectItem>
                    <SelectItem value="GCYS">GCYS</SelectItem>
                    <SelectItem value="G3EI">G3EI</SelectItem>
                    <SelectItem value="MBISD">MBISD</SelectItem>
                    <SelectItem value="MPSI">MPSI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>الجنس</Label>
            <RadioGroup
              defaultValue={formData.gender}
              required
              dir="rtl"
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, gender: value }))
              }
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">ذكر</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">أنثى</Label>
              </div>
            </RadioGroup>
          </div>
          <CardFooter>
            <Button type="submit" className="w-full">
              انضم الآن
            </Button>
          </CardFooter>
          {/* Success message */}
          {formSubmitted && (
            <div className="flex items-center gap-3 rounded-md bg-green-50 p-4 dark:bg-green-900/10 mt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium text-green-900 dark:text-green-50">
                شكرا على اهتمامك، سوف نتواصل معك في وقت قريب إن شاء الله.
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
